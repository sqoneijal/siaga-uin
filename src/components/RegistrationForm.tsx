import { Send } from "lucide-react";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { useToast } from "../hooks/use-toast";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";

const RegistrationForm = () => {
   const { toast } = useToast();
   const [formData, setFormData] = useState({
      name: "",
      nim: "",
      faculty: "",
      phone: "",
      email: "",
      programType: "",
      reason: "",
   });

   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Mock submission
      console.log("Form submitted:", formData);
      toast({
         title: "Pendaftaran Berhasil!",
         description: "Tim kami akan segera menghubungi Anda. Terima kasih.",
      });
      // Reset form
      setFormData({
         name: "",
         nim: "",
         faculty: "",
         phone: "",
         email: "",
         programType: "",
         reason: "",
      });
   };

   return (
      <section id="registration" className="py-20 bg-white">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
               <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Pendaftaran</span>
               <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Ajukan Bantuan</h2>
               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Isi formulir di bawah ini untuk mengajukan bantuan. Tim kami akan menghubungi Anda dalam waktu 2-3 hari kerja.
               </p>
            </div>

            {/* Form */}
            <Card className="shadow-xl border-2">
               <CardHeader>
                  <CardTitle className="text-2xl">Formulir Pendaftaran</CardTitle>
               </CardHeader>
               <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <Label htmlFor="name">Nama Lengkap *</Label>
                           <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Masukkan nama lengkap" required />
                        </div>

                        <div className="space-y-2">
                           <Label htmlFor="nim">NIM *</Label>
                           <Input id="nim" name="nim" value={formData.nim} onChange={handleChange} placeholder="Masukkan NIM" required />
                        </div>
                     </div>

                     <div className="space-y-2">
                        <Label htmlFor="faculty">Fakultas *</Label>
                        <Input
                           id="faculty"
                           name="faculty"
                           value={formData.faculty}
                           onChange={handleChange}
                           placeholder="Masukkan fakultas"
                           required
                        />
                     </div>

                     <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <Label htmlFor="phone">No. Telepon *</Label>
                           <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="08xxxxxxxxxx"
                              required
                           />
                        </div>

                        <div className="space-y-2">
                           <Label htmlFor="email">Email *</Label>
                           <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="email@example.com"
                              required
                           />
                        </div>
                     </div>

                     <div className="space-y-2">
                        <Label htmlFor="programType">Jenis Bantuan yang Dibutuhkan *</Label>
                        <Select value={formData.programType} onValueChange={(value) => setFormData({ ...formData, programType: value })} required>
                           <SelectTrigger>
                              <SelectValue placeholder="Pilih jenis bantuan" />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectItem value="finansial">Bantuan Finansial</SelectItem>
                              <SelectItem value="konseling">Konseling & Pendampingan</SelectItem>
                              <SelectItem value="beasiswa">Beasiswa Prestasi</SelectItem>
                              <SelectItem value="darurat">Bantuan Darurat</SelectItem>
                              <SelectItem value="pelatihan">Pelatihan & Keterampilan</SelectItem>
                              <SelectItem value="kesehatan">Bantuan Kesehatan</SelectItem>
                           </SelectContent>
                        </Select>
                     </div>

                     <div className="space-y-2">
                        <Label htmlFor="reason">Alasan Pengajuan *</Label>
                        <Textarea
                           id="reason"
                           name="reason"
                           value={formData.reason}
                           onChange={handleChange}
                           placeholder="Jelaskan alasan Anda membutuhkan bantuan..."
                           rows={5}
                           required
                        />
                     </div>

                     <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <Send className="mr-2 w-5 h-5" />
                        Kirim Pendaftaran
                     </Button>
                  </form>
               </CardContent>
            </Card>

            {/* Info Box */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
               <h4 className="font-semibold text-gray-900 mb-2">Informasi Penting:</h4>
               <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                     <span className="text-blue-600 mr-2">•</span>
                     <span>Semua informasi yang Anda berikan akan dijaga kerahasiaannya</span>
                  </li>
                  <li className="flex items-start">
                     <span className="text-blue-600 mr-2">•</span>
                     <span>Tim kami akan menghubungi Anda dalam 2-3 hari kerja</span>
                  </li>
                  <li className="flex items-start">
                     <span className="text-blue-600 mr-2">•</span>
                     <span>Pastikan semua data yang diisi adalah benar dan valid</span>
                  </li>
               </ul>
            </div>
         </div>
      </section>
   );
};

export default RegistrationForm;
