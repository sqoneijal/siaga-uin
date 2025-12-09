import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { crudService } from "@/lib/crudService";
import { ArrowLeft, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Response = {
   results: Array<Record<string, string>>;
   total: number;
   totalPenerimaan: string;
};

const formatRupiah = (value: string) => {
   const num = Number.parseFloat(value) || 0;
   return num.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
};

const ReceiverReport = () => {
   const navigate = useNavigate();
   const [searchTerm, setSearchTerm] = useState("");
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

   useEffect(() => {
      setCurrentPage(1);
   }, [searchTerm]);

   const params = { ...pagination, search: searchTerm };
   const { useList } = crudService(`/laporan/penerimaan?${new URLSearchParams(params).toString()}`);
   const { data } = useList<Response>();
   const total = data?.total || 0;

   return (
      <div className="min-h-screen bg-gray-50 pt-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb */}
            <div className="mb-6">
               <button onClick={() => navigate("/")} className="flex items-center text-blue-600 hover:text-blue-700 mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali ke Beranda
               </button>
               <h1 className="text-4xl font-bold text-gray-900 mb-2">Laporan Penerima Bantuan</h1>
               <p className="text-gray-600">Data mahasiswa yang telah menerima bantuan dari Siaga UIN Ar Raniry</p>
            </div>

            {/* Filters & Actions */}
            <Card className="mb-6">
               <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                     <div className="flex-1 w-full md:w-auto">
                        <div className="relative">
                           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                           <Input
                              placeholder="Cari nama atau NIM..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              className="pl-10"
                           />
                        </div>
                     </div>
                  </div>
               </CardContent>
            </Card>

            {/* Statistics Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-6">
               <Card>
                  <CardContent className="p-6">
                     <div className="text-sm text-gray-600 mb-1">Total Penerima</div>
                     <div className="text-3xl font-bold text-gray-900">{data?.total}</div>
                  </CardContent>
               </Card>
               <Card>
                  <CardContent className="p-6">
                     <div className="text-sm text-gray-600 mb-1">Total Dana</div>
                     <div className="text-3xl font-bold text-green-600">{formatRupiah(String(data?.totalPenerimaan))}</div>
                  </CardContent>
               </Card>
            </div>

            {/* Table */}
            <Card>
               <CardHeader>
                  <CardTitle>Daftar Penerima Bantuan</CardTitle>
               </CardHeader>
               <CardContent>
                  <div className="overflow-x-auto">
                     <Table>
                        <TableHeader>
                           <TableRow>
                              <TableHead>No</TableHead>
                              <TableHead>Nama</TableHead>
                              <TableHead>NIM</TableHead>
                              <TableHead>Fakultas</TableHead>
                              <TableHead>Program</TableHead>
                              <TableHead>Nominal</TableHead>
                           </TableRow>
                        </TableHeader>
                        <TableBody>
                           {data?.results?.map((report, index) => (
                              <TableRow key={report.id}>
                                 <TableCell>{(currentPage - 1) * Number.parseInt(pagination.limit) + index + 1}</TableCell>
                                 <TableCell className="font-medium">{report.nim}</TableCell>
                                 <TableCell className="font-medium">{report.nama}</TableCell>
                                 <TableCell>{report.fakultas}</TableCell>
                                 <TableCell>
                                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                       {report.prodi}
                                    </Badge>
                                 </TableCell>
                                 <TableCell className="font-semibold text-green-600">{formatRupiah(report.nominal)}</TableCell>
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

                  {total === 0 && <div className="text-center py-12 text-gray-500">Tidak ada data yang ditemukan</div>}
               </CardContent>
            </Card>
         </div>
      </div>
   );
};

export default ReceiverReport;
