import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { receiverReports } from "@/mockData";
import { ArrowLeft, Download, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReceiverReport = () => {
   const navigate = useNavigate();
   const [searchTerm, setSearchTerm] = useState("");
   const [filterProgram, setFilterProgram] = useState("Semua");

   const programs = ["Semua", "Bantuan Finansial", "Beasiswa Prestasi", "Bantuan Darurat", "Bantuan Kesehatan", "Pelatihan & Keterampilan"];

   const filteredReports = receiverReports.filter((report) => {
      const matchSearch = report.name.toLowerCase().includes(searchTerm.toLowerCase()) || report.nim.includes(searchTerm);
      const matchProgram = filterProgram === "Semua" || report.program === filterProgram;
      return matchSearch && matchProgram;
   });

   const handleExport = () => {
      console.log("Exporting data...");
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
               <h1 className="text-4xl font-bold text-gray-900 mb-2">Laporan Penerimaan Bantuan</h1>
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

                     <div className="flex gap-3 w-full md:w-auto">
                        <select
                           value={filterProgram}
                           onChange={(e) => setFilterProgram(e.target.value)}
                           className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                           {programs.map((program) => (
                              <option key={program} value={program}>
                                 {program}
                              </option>
                           ))}
                        </select>

                        <Button onClick={handleExport} className="bg-green-600 hover:bg-green-700">
                           <Download className="w-4 h-4 mr-2" />
                           Export
                        </Button>
                     </div>
                  </div>
               </CardContent>
            </Card>

            {/* Statistics Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-6">
               <Card>
                  <CardContent className="p-6">
                     <div className="text-sm text-gray-600 mb-1">Total Penerima</div>
                     <div className="text-3xl font-bold text-gray-900">{receiverReports.length}</div>
                  </CardContent>
               </Card>
               <Card>
                  <CardContent className="p-6">
                     <div className="text-sm text-gray-600 mb-1">Total Dana</div>
                     <div className="text-3xl font-bold text-green-600">Rp 22,5M</div>
                  </CardContent>
               </Card>
               <Card>
                  <CardContent className="p-6">
                     <div className="text-sm text-gray-600 mb-1">Program Aktif</div>
                     <div className="text-3xl font-bold text-blue-600">6</div>
                  </CardContent>
               </Card>
               <Card>
                  <CardContent className="p-6">
                     <div className="text-sm text-gray-600 mb-1">Status</div>
                     <div className="text-3xl font-bold text-green-600">Aktif</div>
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
                              <TableHead>Tanggal</TableHead>
                              <TableHead>Status</TableHead>
                           </TableRow>
                        </TableHeader>
                        <TableBody>
                           {filteredReports.map((report, index) => (
                              <TableRow key={report.id}>
                                 <TableCell>{index + 1}</TableCell>
                                 <TableCell className="font-medium">{report.name}</TableCell>
                                 <TableCell>{report.nim}</TableCell>
                                 <TableCell>{report.faculty}</TableCell>
                                 <TableCell>
                                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                       {report.program}
                                    </Badge>
                                 </TableCell>
                                 <TableCell className="font-semibold text-green-600">{report.amount}</TableCell>
                                 <TableCell>{report.date}</TableCell>
                                 <TableCell>
                                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">{report.status}</Badge>
                                 </TableCell>
                              </TableRow>
                           ))}
                        </TableBody>
                     </Table>
                  </div>

                  {filteredReports.length === 0 && <div className="text-center py-12 text-gray-500">Tidak ada data yang ditemukan</div>}
               </CardContent>
            </Card>
         </div>
      </div>
   );
};

export default ReceiverReport;
