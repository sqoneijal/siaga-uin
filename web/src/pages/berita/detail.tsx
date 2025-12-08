import { crudService } from "@/lib/crudService";
import type { Berita } from "@/types/berita";
import dompurify from "dompurify";
import { decode } from "html-entities";
import { Calendar } from "lucide-react";
import moment from "moment";
import { useParams } from "react-router-dom";

function convertDriveToImage(url: string) {
   const match = new RegExp(/\/d\/(.*?)\//).exec(url);
   if (!match) return null;

   const id = match[1];
   return `https://lh3.googleusercontent.com/d/${id}=s800`;
}

const Detail = () => {
   const { id } = useParams();
   const { useDetail } = crudService<Berita>("/berita");
   const { data, isLoading } = useDetail(id);

   if (isLoading) {
      return <div>loading...</div>;
   }

   if (!data) {
      return <div>Data not found</div>;
   }

   return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
         <main className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden" data-testid="article-detail">
               {/* Featured Image */}
               <div className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden bg-slate-200">
                  <img
                     src={convertDriveToImage(data?.thumbnail || "") || ""}
                     alt={data?.judul || ""}
                     className="w-full h-full object-cover"
                     data-testid="article-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
               </div>

               {/* Article Content */}
               <div className="p-6 md:p-8 lg:p-12">
                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-slate-600">
                     <div className="flex items-center gap-2" data-testid="article-date">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        <span>{moment(data.uploaded).format("DD-MM-YYYY")}</span>
                     </div>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight" data-testid="article-title">
                     {data.judul}
                  </h1>

                  {/* Content */}
                  <div
                     className="prose prose-slate prose-lg max-w-none"
                     dangerouslySetInnerHTML={{ __html: dompurify.sanitize(decode(data.content)) }}
                     data-testid="article-content"
                  />
               </div>
            </article>
         </main>
      </div>
   );
};

export default Detail;
