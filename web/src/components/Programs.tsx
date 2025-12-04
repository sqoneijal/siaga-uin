import { crudService } from "@/lib/crudService";
import dompurify from "dompurify";
import { decode } from "html-entities";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Response = {
   results: Array<Record<string, string>>;
   total: number;
};

interface LinkPendataan {
   id: number;
   link?: string;
}

const stripTags = (str: string) => {
   return str.replaceAll(/<\/?[^>]+(>|$)/g, "");
};

const wordLimiter = (text: string, limit: number) => {
   const words = text.trim().split(/\s+/);
   if (words.length <= limit) return text;
   return `${words.slice(0, limit).join(" ")}...`;
};

const Programs = () => {
   const { useList } = crudService("/program?limit=25&offset=0");
   const { data, isLoading } = useList<Response>();
   const { useDetail } = crudService<LinkPendataan>("/link-pendataan");
   const { data: linkPendataan, isLoading: isLoadingDetail } = useDetail(1);

   if (isLoading || isLoadingDetail) {
      return <div>loading...</div>;
   }

   return (
      <section id="programs" className="py-20 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
               <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Program Kami</span>
               <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Layanan & Program Bantuan</h2>
               <p className="text-lg text-gray-600">
                  Berbagai program bantuan yang dirancang khusus untuk mendukung perjalanan akademik dan kesejahteraan mahasiswa UINAR.
               </p>
            </div>

            {/* Programs Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {data?.results?.map((item) => {
                  return (
                     <Card
                        key={item.id}
                        className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-200">
                        <CardHeader>
                           <CardTitle className="text-xl font-bold text-gray-900">{item.judul}</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <p
                              className="text-gray-600 leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: wordLimiter(stripTags(dompurify.sanitize(decode(item.content))), 30) }}
                           />
                           <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors">Pelajari Lebih Lanjut →</button>
                        </CardContent>
                     </Card>
                  );
               })}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center">
               <h3 className="text-3xl font-bold text-white mb-4">Butuh Bantuan?</h3>
               <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                  Jangan ragu untuk menghubungi kami atau mengisi formulir pendaftaran. Tim kami siap membantu Anda.
               </p>
               <button
                  onClick={() => {
                     open(linkPendataan?.link, "_blank");
                  }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Lapor Diri Mahasiswa
               </button>
            </div>
         </div>
      </section>
   );
};

export default Programs;
