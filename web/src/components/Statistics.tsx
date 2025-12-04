import { statistics } from "@/mockData";
import { Briefcase, Handshake, TrendingUp, Users } from "lucide-react";

const iconMap = {
   users: Users,
   briefcase: Briefcase,
   handshake: Handshake,
   "trending-up": TrendingUp,
};

const Statistics = () => {
   return (
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-4xl font-bold text-white mb-4">Dampak Kami</h2>
               <p className="text-blue-100 text-lg">Angka-angka yang menunjukkan komitmen kami dalam membantu mahasiswa UINAR</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {statistics.map((stat) => {
                  const Icon = iconMap[stat.icon as keyof typeof iconMap];
                  return (
                     <div
                        key={stat.id}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                        <div className="flex justify-center mb-4">
                           <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                              <Icon className="w-8 h-8 text-white" />
                           </div>
                        </div>
                        <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                        <div className="text-blue-100 font-medium">{stat.label}</div>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default Statistics;
