import { crudService } from "@/lib/crudService";
import { ArrowRight, Award, Heart, Users } from "lucide-react";
import { Button } from "./ui/button";

interface LinkPendataan {
   id: number;
   link?: string;
}

const Hero = () => {
   const { useDetail } = crudService<LinkPendataan>("/link-pendataan");
   const { data, isLoading } = useDetail(1);

   if (isLoading) {
      return <div>loading...</div>;
   }

   return (
      <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               {/* Left Content */}
               <div className="space-y-8">
                  <div className="inline-block">
                     <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">Duka Aceh dan Solidaritas Kita</span>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                     Banjir Telah Pergi, Tapi Luka Masih Tinggal! <span className="text-blue-600">Saatnya Kita Menyembuhkan!</span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                     Solidaritas UIN Ar-Raniry hadir secara sigap dan berpihak pada mahasiswa untuk memastikan setiap mahasiswa dapat melanjutkan
                     proses pembelajaran secara berkelanjutan, sekaligus memberikan bantuan kepada korban bencana di Aceh. Kami bergerak cepat,
                     memberikan dukungan, membuka akses, dan mengatasi hambatan agar tidak ada yang tertinggal. Untuk informasi dan dukungan lebih
                     lanjut, silakan hubungi kami; kami siap mendampingi hingga tuntas
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                     <Button onClick={() => open(data?.link, "_blank")} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white group">
                        Lapor Diri Mahasiswa
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                     </Button>
                  </div>
                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                     <div className="text-center">
                        <div className="flex justify-center mb-2">
                           <Users className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">3,500+</div>
                        <div className="text-sm text-gray-600">Terbantu</div>
                     </div>
                     <div className="text-center">
                        <div className="flex justify-center mb-2">
                           <Award className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">10+</div>
                        <div className="text-sm text-gray-600">Program</div>
                     </div>
                  </div>
               </div>

               {/* Right Content - Image/Illustration */}
               <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                     <img src="/poster.jpg" alt="Mahasiswa UINAR" className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                  </div>

                  {/* Floating Card */}
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                     <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                           <Heart className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                           <div className="text-2xl font-bold text-gray-900">Rp 1M+</div>
                           <div className="text-sm text-gray-600">Dana Tersalurkan</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
