import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Contact = () => {
   const contactInfo = [
      {
         icon: MapPin,
         title: "Alamat",
         content: "Jl. Teuku Nyak Arief No. 441, Darussalam, Banda Aceh, Aceh 23111",
      },
      {
         icon: Phone,
         title: "Telepon",
         content: "+62 651 7551234",
      },
      {
         icon: Mail,
         title: "Email",
         content: "senyar@usk.ac.id",
      },
      {
         icon: Clock,
         title: "Jam Operasional",
         content: "Senin - Jumat: 08.00 - 16.00 WIB",
      },
   ];

   const socialMedia = [
      { icon: Facebook, name: "Facebook", link: "#" },
      { icon: Instagram, name: "Instagram", link: "#" },
      { icon: Twitter, name: "Twitter", link: "#" },
   ];

   return (
      <section id="contact" className="py-20 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
               <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Hubungi Kami</span>
               <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Kontak & Lokasi</h2>
               <p className="text-lg text-gray-600">Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau membutuhkan bantuan.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               {/* Contact Info */}
               <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                     const Icon = info.icon;
                     return (
                        <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                           <CardContent className="p-6 flex items-start space-x-4">
                              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                 <Icon className="w-6 h-6 text-blue-600" />
                              </div>
                              <div>
                                 <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                                 <p className="text-gray-600">{info.content}</p>
                              </div>
                           </CardContent>
                        </Card>
                     );
                  })}

                  {/* Social Media */}
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                     <h4 className="font-semibold text-gray-900 mb-4">Ikuti Kami</h4>
                     <div className="flex space-x-4">
                        {socialMedia.map((social, index) => {
                           const Icon = social.icon;
                           return (
                              <a
                                 key={index}
                                 href={social.link}
                                 className="w-12 h-12 bg-blue-100 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                                 <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                              </a>
                           );
                        })}
                     </div>
                  </div>
               </div>

               {/* Map */}
               <div className="h-full min-h-[400px]">
                  <div className="w-full h-full bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.2776543211676!2d95.36174731476906!3d5.5628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040377ae64da45d%3A0x2e35b8b4485f8b88!2sUniversitas%20Syiah%20Kuala!5e0!3m2!1sid!2sid!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location Map"></iframe>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Contact;
