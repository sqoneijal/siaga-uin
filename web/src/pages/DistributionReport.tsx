import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { crudService } from "@/lib/crudService";
import { ArrowLeft, DollarSign, TrendingUp } from "lucide-react";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Report = {
   id: string;
   program: {
      id: string;
      judul: string;
   };
   jumlah_penerima: string;
   total_dana: string;
   tanggal: string;
};

type Response = {
   results: Array<Report>;
   total: number;
   jumlah_penerima: string;
   total_dana: string;
   jumlah_program: string;
};
const formatRupiah = (value: string) => {
   const num = Number.parseFloat(value) || 0;
   return num.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
};

const DistributionReport = () => {
   const navigate = useNavigate();

   const [currentPage, setCurrentPage] = useState(1);

   const [pagination, setPagination] = useState({
      limit: "35",
      offset: "0",
   });

   useEffect(() => {
      setPagination((prev) => ({
         ...prev,
         offset: ((currentPage - 1) * Number.parseInt(pagination.limit)).toString(),
      }));
   }, [currentPage, pagination.limit]);

   const params = { ...pagination };
   const { useList } = crudService(`/laporan/penyaluran?${new URLSearchParams(params).toString()}`);
   const { data } = useList<Response>();
   const total = data?.total || 0;

   const { useList: dataTotal } = crudService("/laporan/penyaluran/total");
   const { data: totalData } = dataTotal<Response>();

   return (
      <div className="min-h-screen bg-gray-50 pt-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb */}
            <div className="mb-6">
               <button onClick={() => navigate("/")} className="flex items-center text-blue-600 hover:text-blue-700 mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali ke Beranda
               </button>
               <h1 className="text-4xl font-bold text-gray-900 mb-2">Laporan Penyaluran Bantuan</h1>
               <p className="text-gray-600">Ringkasan penyaluran bantuan per program dan periode</p>
            </div>

            {/* Summary Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
               <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <CardContent className="p-6">
                     <div className="flex items-center justify-between">
                        <div>
                           <div className="text-blue-100 text-sm mb-1">Total Penerima</div>
                           <div className="text-4xl font-bold">{totalData?.jumlah_penerima}</div>
                           <div className="text-blue-100 text-xs mt-1">Mahasiswa</div>
                        </div>
                        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                           <TrendingUp className="w-7 h-7" />
                        </div>
                     </div>
                  </CardContent>
               </Card>

               <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                  <CardContent className="p-6">
                     <div className="flex items-center justify-between">
                        <div>
                           <div className="text-green-100 text-sm mb-1">Total Dana</div>
                           <div className="text-3xl font-bold">{formatRupiah(String(totalData?.total_dana))}</div>
                           <div className="text-green-100 text-xs mt-1">Tersalurkan</div>
                        </div>
                        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                           <DollarSign className="w-7 h-7" />
                        </div>
                     </div>
                  </CardContent>
               </Card>

               <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                  <CardContent className="p-6">
                     <div className="flex items-center justify-between">
                        <div>
                           <div className="text-purple-100 text-sm mb-1">Jenis Program</div>
                           <div className="text-4xl font-bold">{totalData?.jumlah_program}</div>
                           <div className="text-purple-100 text-xs mt-1">Program Aktif</div>
                        </div>
                        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                           <TrendingUp className="w-7 h-7" />
                        </div>
                     </div>
                  </CardContent>
               </Card>
            </div>

            {/* Distribution Table */}
            <Card>
               <CardHeader>
                  <CardTitle>Detail Penyaluran Bantuan</CardTitle>
               </CardHeader>
               <CardContent>
                  <div className="overflow-x-auto">
                     <Table>
                        <TableHeader>
                           <TableRow>
                              <TableHead>No</TableHead>
                              <TableHead>Jenis Program</TableHead>
                              <TableHead>Jumlah Penerima</TableHead>
                              <TableHead>Total Dana</TableHead>
                              <TableHead>Tanggal</TableHead>
                           </TableRow>
                        </TableHeader>
                        <TableBody>
                           {data?.results?.map((report, index) => (
                              <TableRow key={report.id}>
                                 <TableCell>{index + 1}</TableCell>
                                 <TableCell>
                                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                       {report.program.judul}
                                    </Badge>
                                 </TableCell>
                                 <TableCell>
                                    <span className="font-semibold">{report.jumlah_penerima}</span> Mahasiswa
                                 </TableCell>
                                 <TableCell className="font-bold text-green-600">{formatRupiah(report.total_dana)}</TableCell>
                                 <TableCell>{moment(report.tanggal).format("DD-MM-YYYYY")}</TableCell>
                              </TableRow>
                           ))}
                        </TableBody>
                     </Table>
                  </div>

                  {/* Pagination */}
                  {total > 0 && (
                     <div className="flex justify-between items-center mt-4">
                        <Button variant="outline" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage <= 1}>
                           Previous
                        </Button>
                        <span className="text-sm text-gray-600">
                           Page {currentPage} of {Math.ceil(total / Number.parseInt(pagination.limit))}
                        </span>
                        <Button
                           variant="outline"
                           onClick={() => setCurrentPage(currentPage + 1)}
                           disabled={currentPage >= Math.ceil(total / Number.parseInt(pagination.limit))}>
                           Next
                        </Button>
                     </div>
                  )}

                  {total === 0 && <div className="text-center py-12 text-gray-500">Tidak ada data untuk periode yang dipilih</div>}
               </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="mt-6 bg-blue-50 border-blue-200">
               <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Informasi Laporan</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                     <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Data laporan diperbarui setiap akhir bulan</span>
                     </li>
                     <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Semua data telah diverifikasi oleh tim keuangan ar-raniry peduli</span>
                     </li>
                     <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Untuk informasi lebih lanjut, hubungi sekretariat ar-raniry peduli</span>
                     </li>
                  </ul>
               </CardContent>
            </Card>
         </div>
      </div>
   );
};

export default DistributionReport;
