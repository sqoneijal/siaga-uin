import { news } from "@/mockData";
import { ArrowRight, Calendar } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";

const News = () => {
   const [selectedCategory, setSelectedCategory] = useState("Semua");

   const categories = ["Semua", "Pengumuman", "Kegiatan", "Bantuan Darurat", "Inovasi"];

   const filteredNews = selectedCategory === "Semua" ? news : news.filter((item) => item.category === selectedCategory);

   return (
      <section id="news" className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
               <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Berita & Update</span>
               <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Berita Terkini</h2>
               <p className="text-lg text-gray-600">Update terbaru tentang kegiatan, program, dan pengumuman dari Satgas Senyar USK.</p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
               {categories.map((category) => (
                  <button
                     key={category}
                     onClick={() => setSelectedCategory(category)}
                     className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                        selectedCategory === category ? "bg-blue-600 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                     }`}>
                     {category}
                  </button>
               ))}
            </div>

            {/* News Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {filteredNews.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                     <div className="relative h-48 overflow-hidden">
                        <img
                           src={item.image}
                           alt={item.title}
                           className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute top-4 right-4">
                           <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">{item.category}</span>
                        </div>
                     </div>
                     <CardContent className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                           <Calendar className="w-4 h-4 mr-2" />
                           {item.date}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                        <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group">
                           Baca Selengkapnya
                           <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </section>
   );
};

export default News;
