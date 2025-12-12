import { crudService } from "@/lib/crudService";
import type { Berita } from "@/types/berita";
import dompurify from "dompurify";
import { decode } from "html-entities";
import { useParams } from "react-router-dom";

const Detail = () => {
   const { id } = useParams();
   const { useDetail } = crudService<Berita>("/program");
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
               {/* Article Content */}
               <div className="p-6 md:p-8 lg:p-12">
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
