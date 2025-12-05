import { crudService } from "@/lib/crudService";
import dompurify from "dompurify";
import { decode } from "html-entities";
import { Eye, Heart, Shield, Target } from "lucide-react";
import { Card, CardContent } from "./ui/card";

type FormData = Record<string, string>;

const About = () => {
   const values = [
      {
         icon: Heart,
         title: "Peduli",
         description: "Kami peduli terhadap kesejahteraan setiap mahasiswa UINAR",
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

   const { useDetail: detailVisi } = crudService<FormData>("/visi");
   const { data: visi, isLoading: isLoadingVisi } = detailVisi(1);

   const { useDetail: detailMisi } = crudService<FormData>("/misi");
   const { data: misi, isLoading: isLoadingMisi } = detailMisi(1);

   if (isLoadingVisi || isLoadingMisi) {
      return <div>loading...</div>;
   }

   return (
      <section id="about" className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
               <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Tentang Kami</span>
               <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Siaga UIN Ar Raniry</h2>
               <p className="text-lg text-gray-600">
                  Taskforce Siaga UIN Ar-Raniry hadir untuk memberikan dukungan dan bantuan kepada mahasiswa serta masyarakat yang terdampak bencana
                  banjir dan tanah longsor tahun 2025. Inisiatif ini bertujuan memastikan tidak ada mahasiswa yang mengalami hambatan dalam proses
                  perkuliahan serta meringankan beban penderitaan yang dialami para korban.
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
                     <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: dompurify.sanitize(decode(visi?.content)) }} />
                  </CardContent>
               </Card>

               <Card className="border-2 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                     <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                        <Target className="w-7 h-7 text-green-600" />
                     </div>
                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi</h3>
                     <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: dompurify.sanitize(decode(misi?.content)) }} />
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
