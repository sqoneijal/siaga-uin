import { Card, CardContent } from "@/components/ui/card";
import { crudService } from "@/lib/crudService";
import { ArrowLeft, ExternalLink, Link as LinkIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Response = {
   results: Array<Record<string, string>>;
   total: number;
};

const ImportantLinks = () => {
   const navigate = useNavigate();

   const { useList } = crudService("/informasi/link-penting?limit=999&offset=0");
   const { data, isLoading } = useList<Response>();

   if (isLoading) {
      return <div>loading...</div>;
   }

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
               <p className="text-gray-600">Kumpulan tautan berguna untuk mahasiswa UIN Ar Raniry</p>
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
                           Berikut adalah daftar link penting yang sering digunakan oleh mahasiswa UINAR. Klik pada link untuk mengakses layanan yang
                           diperlukan.
                        </p>
                     </div>
                  </div>
               </CardContent>
            </Card>

            {/* Links by Category */}
            <div className="space-y-6">
               <Card>
                  <CardContent className="p-6">
                     <div className="grid md:grid-cols-2 gap-4">
                        {data?.results?.map((item) => {
                           return (
                              <a
                                 key={item.id}
                                 href={item.link}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="group flex items-start p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                                 <div className="flex-1">
                                    <div className="flex items-center mb-2">
                                       <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{item.nama}</h4>
                                       <ExternalLink className="w-4 h-4 ml-2 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    </div>
                                    <p className="text-sm text-gray-600">{item.keterangan}</p>
                                 </div>
                              </a>
                           );
                        })}
                     </div>
                  </CardContent>
               </Card>
            </div>
         </div>
      </div>
   );
};

export default ImportantLinks;
