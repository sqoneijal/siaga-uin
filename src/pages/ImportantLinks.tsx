import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { importantLinks } from "@/mockData";
import { ArrowLeft, ExternalLink, Link as LinkIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ImportantLinks = () => {
   const navigate = useNavigate();

   return (
      <div className="min-h-screen bg-gray-50 pt-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb */}
            <div className="mb-6">
               <button onClick={() => navigate("/")} className="flex items-center text-blue-600 hover:text-blue-700 mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali ke Beranda
               </button>
               <h1 className="text-4xl font-bold text-gray-900 mb-2">Link Penting</h1>
               <p className="text-gray-600">Kumpulan tautan berguna untuk mahasiswa Universitas Syiah Kuala</p>
            </div>

            {/* Info Banner */}
            <Card className="mb-8 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
               <CardContent className="p-6">
                  <div className="flex items-start">
                     <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                        <LinkIcon className="w-6 h-6 text-white" />
                     </div>
                     <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Akses Cepat</h3>
                        <p className="text-gray-700 text-sm">
                           Berikut adalah daftar link penting yang sering digunakan oleh mahasiswa USK. Klik pada link untuk mengakses layanan yang
                           diperlukan.
                        </p>
                     </div>
                  </div>
               </CardContent>
            </Card>

            {/* Links by Category */}
            <div className="space-y-6">
               {importantLinks.map((linkGroup) => (
                  <Card key={linkGroup.id}>
                     <CardHeader className="bg-gray-50 border-b">
                        <CardTitle className="text-xl">{linkGroup.category}</CardTitle>
                     </CardHeader>
                     <CardContent className="p-6">
                        <div className="grid md:grid-cols-2 gap-4">
                           {linkGroup.links.map((link, index) => (
                              <a
                                 key={index}
                                 href={link.url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="group flex items-start p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                                 <div className="flex-1">
                                    <div className="flex items-center mb-2">
                                       <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{link.name}</h4>
                                       <ExternalLink className="w-4 h-4 ml-2 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    </div>
                                    <p className="text-sm text-gray-600">{link.description}</p>
                                 </div>
                              </a>
                           ))}
                        </div>
                     </CardContent>
                  </Card>
               ))}
            </div>

            {/* Additional Help */}
            <Card className="mt-8 bg-yellow-50 border-yellow-200">
               <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Butuh Bantuan?</h3>
                  <p className="text-gray-700 text-sm mb-4">
                     Jika Anda mengalami kesulitan mengakses link di atas atau membutuhkan informasi tambahan, silakan hubungi:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                     <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Helpdesk IT USK: helpdesk@usk.ac.id</span>
                     </li>
                     <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Satgas Senyar: senyar@usk.ac.id</span>
                     </li>
                     <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Telepon: +62 651 7551234</span>
                     </li>
                  </ul>
               </CardContent>
            </Card>
         </div>
      </div>
   );
};

export default ImportantLinks;
