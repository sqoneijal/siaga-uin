import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const menuItems = [
      { label: "Beranda", href: "#home" },
      { label: "Tentang", href: "#about" },
      { label: "Program", href: "#programs" },
      { label: "Berita", href: "#news" },
      { label: "Galeri", href: "#gallery" },
      { label: "Kontak", href: "#contact" },
   ];

   const scrollToSection = (e: React.MouseEvent<HTMLElement>, href: string) => {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
         setIsMobileMenuOpen(false);
      }
   };

   return (
      <nav
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
         }`}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
               {/* Logo */}
               <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                     <span className="text-white font-bold text-xl">UIN</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="font-bold text-gray-900 text-lg">Ar Raniry Peduli</span>
                     <span className="text-xs text-gray-600">Universitas Ar Raniry Banda Aceh</span>
                  </div>
               </div>

               {/* Desktop Menu */}
               <div className="hidden md:flex items-center space-x-8">
                  {menuItems.map((item) => (
                     <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                        {item.label}
                     </a>
                  ))}
                  <Button onClick={(e) => scrollToSection(e, "#registration")} className="bg-blue-600 hover:bg-blue-700 text-white">
                     Daftar Sekarang
                  </Button>
               </div>

               {/* Mobile Menu Button */}
               <button
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
               </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
               <div className="md:hidden py-4 border-t border-gray-200">
                  {menuItems.map((item) => (
                     <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className="block py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                        {item.label}
                     </a>
                  ))}
                  <Button onClick={(e) => scrollToSection(e, "#registration")} className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                     Daftar Sekarang
                  </Button>
               </div>
            )}
         </div>
      </nav>
   );
};

export default Navbar;
