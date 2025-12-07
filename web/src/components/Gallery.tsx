import { crudService } from "@/lib/crudService";
import { X } from "lucide-react";
import { useState } from "react";

interface GalleryItem {
   id: number;
   image: string;
   title: string;
   category: string;
}

type Response = {
   results: Array<{
      id: number;
      judul: string | null;
      link_folder_drive: string | null;
      galleri_detail: Array<{
         id: number;
         path: string | null;
      }>;
   }>;
};

function convertDriveToImage(url: string) {
   const match = new RegExp(/\/d\/(.*?)\//).exec(url);
   if (!match) return null;

   const id = match[1];
   return `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
}

const Gallery = () => {
   const { useList } = crudService("/galleri/new");
   const { data, isLoading } = useList<Response>();

   const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
   const [selectedCategory, setSelectedCategory] = useState("Semua");

   if (isLoading) {
      return <div>loading...</div>;
   }

   const categories = ["Semua"];
   const categorySet = new Set<string>();
   if (data?.results) {
      for (const item of data.results) {
         if (item.judul) {
            categorySet.add(item.judul);
         }
      }
   }
   categories.push(...Array.from(categorySet));

   const filteredGalleri =
      selectedCategory === "Semua" ? data?.results ?? [] : data?.results?.filter((galleri) => galleri.judul === selectedCategory) ?? [];

   return (
      <section id="gallery" className="py-20 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
               <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Galeri</span>
               <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Dokumentasi Kegiatan</h2>
               <p className="text-lg text-gray-600">Momen-momen berharga dari berbagai kegiatan dan program Siaga UIN Ar Raniry.</p>
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
               {filteredGalleri?.map((galleri) =>
                  galleri?.galleri_detail?.map((item) => {
                     return (
                        <button
                           key={item?.id}
                           className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square bg-none border-none p-0"
                           onClick={() =>
                              setSelectedImage({
                                 id: item?.id || 0,
                                 image: convertDriveToImage(item?.path || "") || "",
                                 title: galleri?.judul || "",
                                 category: galleri?.judul || "",
                              })
                           }>
                           <img
                              src={convertDriveToImage(item?.path || "") || ""}
                              alt="Galeri dokumentasi kegiatan"
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                           />
                        </button>
                     );
                  })
               )}
            </div>
         </div>

         {/* Modal */}
         {selectedImage && (
            <button
               className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
               onClick={() => setSelectedImage(null)}
               onKeyDown={(e) => e.key === "Escape" && setSelectedImage(null)}
               tabIndex={-1}>
               <button
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                  onClick={(e) => {
                     e.stopPropagation();
                     setSelectedImage(null);
                  }}>
                  <X className="w-8 h-8" />
               </button>
               <button className="max-w-4xl w-full bg-none border-none p-0 cursor-default" onClick={(e) => e.stopPropagation()}>
                  <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-auto rounded-lg" />
               </button>
            </button>
         )}
      </section>
   );
};

export default Gallery;
