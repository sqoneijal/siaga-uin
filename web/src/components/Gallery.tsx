import { gallery } from "@/mockData";
import { X } from "lucide-react";
import { useState } from "react";

interface GalleryItem {
   id: number;
   image: string;
   title: string;
   category: string;
}

const Gallery = () => {
   const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
   const [selectedCategory, setSelectedCategory] = useState("Semua");

   const categories = ["Semua", "Kegiatan", "Workshop", "Bantuan"];

   const filteredGallery = selectedCategory === "Semua" ? gallery : gallery.filter((item) => item.category === selectedCategory);

   return (
      <section id="gallery" className="py-20 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
               <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Galeri</span>
               <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Dokumentasi Kegiatan</h2>
               <p className="text-lg text-gray-600">Momen-momen berharga dari berbagai kegiatan dan program Satgas Senyar USK.</p>
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

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
               {filteredGallery.map((item) => (
                  <div
                     key={item.id}
                     className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
                     onClick={() => setSelectedImage(item)}>
                     <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                           <h4 className="text-white font-semibold">{item.title}</h4>
                           <p className="text-white/80 text-sm">{item.category}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Modal */}
         {selectedImage && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
               <button className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors" onClick={() => setSelectedImage(null)}>
                  <X className="w-8 h-8" />
               </button>
               <div className="max-w-4xl w-full">
                  <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-auto rounded-lg" />
                  <div className="text-white mt-4 text-center">
                     <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                     <p className="text-gray-300">{selectedImage.category}</p>
                  </div>
               </div>
            </div>
         )}
      </section>
   );
};

export default Gallery;
