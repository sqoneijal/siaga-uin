import { ArrowRight, Award, Heart, Users } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
   const scrollToSection = (href: string) => {
      const element = document.querySelector(href);
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               {/* Left Content */}
               <div className="space-y-8">
                  <div className="inline-block">
                     <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">Duka Aceh dan Solidaritas Kita</span>
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                     Bersama Membantu<span className="text-blue-600"> Mahasiswa</span> UINAR
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                     Satgas Senyar USK hadir untuk memberikan dukungan dan bantuan kepada mahasiswa Universitas Syiah Kuala yang membutuhkan. Kami
                     berkomitmen untuk memastikan setiap mahasiswa dapat menyelesaikan pendidikan dengan baik.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                     <Button
                        onClick={() =>
                           open("https://docs.google.com/forms/d/e/1FAIpQLSexXuXsVx_78fAlyMDXVMUs708aN7EZAHfJxTak3pKJppTSwA/viewform", "_blank")
                        }
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white group">
                        Daftar Sekarang
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                     </Button>
                     <Button
                        onClick={() => scrollToSection("#about")}
                        size="lg"
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50">
                        Pelajari Lebih Lanjut
                     </Button>
                  </div>
                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                     <div className="text-center">
                        <div className="flex justify-center mb-2">
                           <Users className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">2,500+</div>
                        <div className="text-sm text-gray-600">Terbantu</div>
                     </div>
                     <div className="text-center">
                        <div className="flex justify-center mb-2">
                           <Award className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">50+</div>
                        <div className="text-sm text-gray-600">Program</div>
                     </div>
                     <div className="text-center">
                        <div className="flex justify-center mb-2">
                           <Heart className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">5+ Tahun</div>
                        <div className="text-sm text-gray-600">Pengalaman</div>
                     </div>
                  </div>
               </div>

               {/* Right Content - Image/Illustration */}
               <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                     <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
                        alt="Mahasiswa USK"
                        className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                  </div>

                  {/* Floating Card */}
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                     <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                           <Heart className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                           <div className="text-2xl font-bold text-gray-900">Rp 5M+</div>
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
