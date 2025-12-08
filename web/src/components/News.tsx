import { crudService } from "@/lib/crudService";
import { ArrowRight, Calendar } from "lucide-react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";

type Response = {
   results: Array<Record<string, string>>;
};

function convertDriveToImage(url: string) {
   const match = new RegExp(/\/d\/(.*?)\//).exec(url);
   if (!match) return null;

   const id = match[1];
   return `https://lh3.googleusercontent.com/d/${id}=s800`;
}

const News = () => {
   const { useList } = crudService("/berita?limit=25&offset=0");
   const { data, isLoading } = useList<Response>();

   if (isLoading) {
      return <div>loading...</div>;
   }

   return (
      <section id="news" className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
               <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Berita & Update</span>
               <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Berita Terkini</h2>
               <p className="text-lg text-gray-600">Update terbaru tentang kegiatan, program, dan pengumuman dari Siaga UIN Ar Raniry.</p>
            </div>

            {/* News Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {data?.results?.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                     <div className="relative h-48 overflow-hidden">
                        <img
                           src={convertDriveToImage(item?.thumbnail || "") || ""}
                           alt={item.judul}
                           className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                     </div>
                     <CardContent className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                           <Calendar className="w-4 h-4 mr-2" />
                           {moment(item.uploaded).format("DD-MM-YYYY")}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.judul}</h3>
                        <Link to={`/berita/${item.id}`} className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group">
                           Baca Selengkapnya
                           <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </section>
   );
};

export default News;
