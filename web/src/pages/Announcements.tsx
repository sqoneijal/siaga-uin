import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { announcements } from "@/mockData";
import { AlertCircle, ArrowLeft, Calendar, Paperclip, Tag } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Announcement = {
   id: number;
   title: string;
   date: string;
   category: string;
   priority: string;
   content: string;
   attachments: Array<string>;
};

const Announcements = () => {
   const navigate = useNavigate();
   const [selectedCategory, setSelectedCategory] = useState("Semua");
   const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);

   const categories = ["Semua", "Pendaftaran", "Beasiswa", "Informasi", "Pengumuman", "Kegiatan"];

   const filteredAnnouncements = selectedCategory === "Semua" ? announcements : announcements.filter((item) => item.category === selectedCategory);

   const getPriorityColor = (priority: string) => {
      switch (priority) {
         case "Sangat Penting":
            return "bg-red-100 text-red-700 border-red-300";
         case "Penting":
            return "bg-orange-100 text-orange-700 border-orange-300";
         default:
            return "bg-blue-100 text-blue-700 border-blue-300";
      }
   };

   return (
      <div className="min-h-screen bg-gray-50 pt-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb */}
            <div className="mb-6">
               <button onClick={() => navigate("/")} className="flex items-center text-blue-600 hover:text-blue-700 mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali ke Beranda
               </button>
               <h1 className="text-4xl font-bold text-gray-900 mb-2">Pengumuman</h1>
               <p className="text-gray-600">Informasi dan pengumuman resmi dari Siaga UIN Ar Raniry</p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-8">
               {categories.map((category) => (
                  <button
                     key={category}
                     onClick={() => setSelectedCategory(category)}
                     className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                        selectedCategory === category
                           ? "bg-blue-600 text-white shadow-lg"
                           : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                     }`}>
                     {category}
                  </button>
               ))}
            </div>

            {/* Announcements Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
               {/* List View */}
               <div className="lg:col-span-1 space-y-4">
                  {filteredAnnouncements.map((announcement) => (
                     <Card
                        key={announcement.id}
                        className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                           selectedAnnouncement?.id === announcement.id ? "ring-2 ring-blue-500 shadow-lg" : ""
                        }`}
                        onClick={() => setSelectedAnnouncement(announcement)}>
                        <CardContent className="p-4">
                           <div className="flex items-start justify-between mb-2">
                              <Badge className={getPriorityColor(announcement.priority)}>{announcement.priority}</Badge>
                              <span className="text-xs text-gray-500">{announcement.date}</span>
                           </div>
                           <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{announcement.title}</h3>
                           <div className="flex items-center text-xs text-gray-500">
                              <Tag className="w-3 h-3 mr-1" />
                              {announcement.category}
                           </div>
                        </CardContent>
                     </Card>
                  ))}

                  {filteredAnnouncements.length === 0 && (
                     <Card>
                        <CardContent className="p-8 text-center text-gray-500">Tidak ada pengumuman untuk kategori ini</CardContent>
                     </Card>
                  )}
               </div>

               {/* Detail View */}
               <div className="lg:col-span-2">
                  {selectedAnnouncement ? (
                     <Card className="sticky top-24">
                        <CardHeader className="border-b">
                           <div className="flex items-start justify-between mb-3">
                              <Badge className={getPriorityColor(selectedAnnouncement.priority)}>
                                 <AlertCircle className="w-3 h-3 mr-1" />
                                 {selectedAnnouncement.priority}
                              </Badge>
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                 {selectedAnnouncement.category}
                              </Badge>
                           </div>
                           <CardTitle className="text-2xl">{selectedAnnouncement.title}</CardTitle>
                           <div className="flex items-center text-sm text-gray-500 mt-2">
                              <Calendar className="w-4 h-4 mr-2" />
                              {selectedAnnouncement.date}
                           </div>
                        </CardHeader>
                        <CardContent className="p-6">
                           <div className="prose max-w-none">
                              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{selectedAnnouncement.content}</p>
                           </div>

                           {selectedAnnouncement.attachments.length > 0 && (
                              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                                 <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                                    <Paperclip className="w-4 h-4 mr-2" />
                                    Lampiran
                                 </h4>
                                 <div className="space-y-2">
                                    {selectedAnnouncement.attachments.map((attachment: string, index: number) => (
                                       <a key={index} href="#" className="flex items-center text-blue-600 hover:text-blue-700 text-sm">
                                          <Paperclip className="w-4 h-4 mr-2" />
                                          {attachment}
                                       </a>
                                    ))}
                                 </div>
                              </div>
                           )}

                           <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                              <p className="text-sm text-gray-700">
                                 <strong>Catatan:</strong> Untuk informasi lebih lanjut atau pertanyaan terkait pengumuman ini, silakan hubungi
                                 sekretariat Satgas Senyar melalui email atau telepon yang tertera di halaman kontak.
                              </p>
                           </div>
                        </CardContent>
                     </Card>
                  ) : (
                     <Card className="h-full flex items-center justify-center">
                        <CardContent className="text-center py-12">
                           <AlertCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                           <p className="text-gray-500 text-lg">Pilih pengumuman untuk melihat detail</p>
                        </CardContent>
                     </Card>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Announcements;
