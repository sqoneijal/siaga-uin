import { Eye, Heart, Shield, Target } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
   const values = [
      {
         icon: Heart,
         title: "Peduli",
         description: "Kami peduli terhadap kesejahteraan setiap mahasiswa USK",
      },
      {
         icon: Shield,
         title: "Terpercaya",
         description: "Transparansi dan akuntabilitas dalam setiap program",
      },
      {
         icon: Target,
         title: "Tepat Sasaran",
         description: "Bantuan yang tepat untuk yang membutuhkan",
      },
      {
         icon: Eye,
         title: "Profesional",
         description: "Pengelolaan program dengan standar profesional",
      },
   ];

   return (
      <section id="about" className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
               <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Tentang Kami</span>
               <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Satgas Senyar USK</h2>
               <p className="text-lg text-gray-600">
                  Satuan Tugas Senyar adalah program inisiatif dari Universitas Syiah Kuala yang bertujuan untuk memberikan dukungan dan bantuan
                  kepada mahasiswa yang mengalami kesulitan dalam menjalani perkuliahan.
               </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
               <Card className="border-2 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                     <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                        <Eye className="w-7 h-7 text-blue-600" />
                     </div>
                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi</h3>
                     <p className="text-gray-600 leading-relaxed">
                        Menjadi lembaga pendukung utama dalam mewujudkan kesejahteraan mahasiswa Universitas Syiah Kuala yang inklusif, profesional,
                        dan berkelanjutan.
                     </p>
                  </CardContent>
               </Card>

               <Card className="border-2 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                     <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                        <Target className="w-7 h-7 text-green-600" />
                     </div>
                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi</h3>
                     <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                           <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                           <span>Memberikan bantuan finansial kepada mahasiswa yang membutuhkan</span>
                        </li>
                        <li className="flex items-start">
                           <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                           <span>Menyediakan layanan konseling dan pendampingan</span>
                        </li>
                        <li className="flex items-start">
                           <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                           <span>Membangun jaringan dukungan untuk mahasiswa</span>
                        </li>
                     </ul>
                  </CardContent>
               </Card>
            </div>

            {/* Values */}
            <div>
               <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Nilai-Nilai Kami</h3>
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {values.map((value, index) => {
                     const Icon = value.icon;
                     return (
                        <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                           <CardContent className="p-6">
                              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                 <Icon className="w-8 h-8 text-blue-600" />
                              </div>
                              <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                              <p className="text-gray-600 text-sm">{value.description}</p>
                           </CardContent>
                        </Card>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
