import { Heart } from "lucide-react";

const Footer = () => {
   const currentYear = new Date().getFullYear();

   const footerLinks = {
      Tentang: [
         { label: "Profil Satgas", href: "#about" },
         { label: "Visi & Misi", href: "#about" },
         { label: "Tim Kami", href: "#about" },
      ],
      Program: [
         { label: "Bantuan Finansial", href: "#programs" },
         { label: "Konseling", href: "#programs" },
         { label: "Beasiswa", href: "#programs" },
      ],
      Informasi: [
         { label: "Berita", href: "#news" },
         { label: "Galeri", href: "#gallery" },
         { label: "FAQ", href: "#" },
      ],
   };

   return (
      <footer className="bg-gray-900 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
               {/* Brand */}
               <div className="lg:col-span-1">
                  <div className="flex items-center space-x-3 mb-4">
                     <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">UINAR</span>
                     </div>
                     <div className="flex flex-col">
                        <span className="font-bold text-white text-lg">Satgas Senyar</span>
                        <span className="text-xs text-gray-400">Universitas Syiah Kuala</span>
                     </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                     Membantu dan mendukung mahasiswa UINAR untuk mencapai kesuksesan akademik dan kesejahteraan.
                  </p>
               </div>

               {/* Links */}
               {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category}>
                     <h4 className="font-semibold text-white mb-4">{category}</h4>
                     <ul className="space-y-2">
                        {links.map((link, index) => (
                           <li key={index}>
                              <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                                 {link.label}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-800 pt-8">
               <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} Siaga UIN Ar Raniry. All rights reserved.</p>
                  <div className="flex items-center text-sm text-gray-400">
                     <span>Dibuat dengan</span>
                     <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
                     <span>untuk Mahasiswa UINAR</span>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
