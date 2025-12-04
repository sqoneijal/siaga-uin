import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { distributionReports } from "@/mockData";
import { ArrowLeft, DollarSign, Download, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DistributionReport = () => {
   const navigate = useNavigate();
   const [selectedPeriod, setSelectedPeriod] = useState("Semua");

   const periods = ["Semua", "Januari 2024", "Desember 2023"];

   const filteredReports =
      selectedPeriod === "Semua" ? distributionReports : distributionReports.filter((report) => report.period === selectedPeriod);

   const totalRecipients = filteredReports.reduce((sum, report) => sum + report.totalRecipients, 0);
   const totalAmount = "Rp 487.500.000";

   const handleExport = () => {
      console.log("Exporting distribution data...");
      alert("Data sedang diunduh...");
   };

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

            {/* Filter & Actions */}
            <Card className="mb-6">
               <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                     <div className="flex gap-3">
                        <select
                           value={selectedPeriod}
                           onChange={(e) => setSelectedPeriod(e.target.value)}
                           className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                           {periods.map((period) => (
                              <option key={period} value={period}>
                                 {period}
                              </option>
                           ))}
                        </select>
                     </div>

                     <Button onClick={handleExport} className="bg-green-600 hover:bg-green-700">
                        <Download className="w-4 h-4 mr-2" />
                        Export Laporan
                     </Button>
                  </div>
               </CardContent>
            </Card>

            {/* Summary Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
               <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <CardContent className="p-6">
                     <div className="flex items-center justify-between">
                        <div>
                           <div className="text-blue-100 text-sm mb-1">Total Penerima</div>
                           <div className="text-4xl font-bold">{totalRecipients}</div>
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
                           <div className="text-3xl font-bold">{totalAmount}</div>
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
                           <div className="text-4xl font-bold">6</div>
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
                              <TableHead>Periode</TableHead>
                              <TableHead>Jenis Program</TableHead>
                              <TableHead>Jumlah Penerima</TableHead>
                              <TableHead>Total Dana</TableHead>
                              <TableHead>Tanggal</TableHead>
                              <TableHead>Status</TableHead>
                           </TableRow>
                        </TableHeader>
                        <TableBody>
                           {filteredReports.map((report, index) => (
                              <TableRow key={report.id}>
                                 <TableCell>{index + 1}</TableCell>
                                 <TableCell className="font-medium">{report.period}</TableCell>
                                 <TableCell>
                                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                       {report.programType}
                                    </Badge>
                                 </TableCell>
                                 <TableCell>
                                    <span className="font-semibold">{report.totalRecipients}</span> Mahasiswa
                                 </TableCell>
                                 <TableCell className="font-bold text-green-600">{report.totalAmount}</TableCell>
                                 <TableCell>{report.date}</TableCell>
                                 <TableCell>
                                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">{report.status}</Badge>
                                 </TableCell>
                              </TableRow>
                           ))}
                        </TableBody>
                     </Table>
                  </div>

                  {filteredReports.length === 0 && <div className="text-center py-12 text-gray-500">Tidak ada data untuk periode yang dipilih</div>}
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
                        <span>Semua data telah diverifikasi oleh tim keuangan Satgas Senyar</span>
                     </li>
                     <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Untuk informasi lebih lanjut, hubungi sekretariat Satgas Senyar</span>
                     </li>
                  </ul>
               </CardContent>
            </Card>
         </div>
      </div>
   );
};

export default DistributionReport;
