import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface MenuItem {
   label: string;
   href: string;
   type: string;
}

interface NavItem {
   label: string;
   href: string;
}

const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [isLaporanOpen, setIsLaporanOpen] = useState(false);
   const navigate = useNavigate();
   const location = useLocation();

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const menuItems: Array<MenuItem> = [
      { label: "Beranda", href: "/", type: "route" },
      { label: "Tentang", href: "#about", type: "scroll" },
      { label: "Program", href: "#programs", type: "scroll" },
      { label: "Berita", href: "#news", type: "scroll" },
      { label: "Galeri", href: "#gallery", type: "scroll" },
      { label: "Kontak", href: "#contact", type: "scroll" },
   ];

   const laporanItems: Array<NavItem> = [
      { label: "Penerimaan", href: "/laporan-penerimaan" },
      { label: "Penyaluran", href: "/laporan-penyaluran" },
   ];

   const infoItems: Array<NavItem> = [
      { label: "Pengumuman", href: "/pengumuman" },
      { label: "Link Penting", href: "/link-penting" },
   ];

   const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, item: MenuItem) => {
      e.preventDefault();
      setIsMobileMenuOpen(false);

      if (item.type === "route") {
         navigate(item.href);
      } else if (item.type === "scroll") {
         if (location.pathname === "/") {
            const element = document.querySelector(item.href);
            if (element) element.scrollIntoView({ behavior: "smooth" });
         } else {
            navigate("/");
            setTimeout(() => {
               const element = document.querySelector(item.href);
               if (element) element.scrollIntoView({ behavior: "smooth" });
            }, 100);
         }
      }
   };

   const handleRouteClick = (href: string) => {
      navigate(href);
      setIsMobileMenuOpen(false);
      setIsLaporanOpen(false);
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
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                     <img src="/32x32.png" alt="logo uinar" />
                  </div>
                  <div className="flex flex-col">
                     <span className="font-bold text-gray-900 text-lg">Ar Raniry Peduli</span>
                     <span className="text-xs text-gray-600">Universitas Ar Raniry Banda Aceh</span>
                  </div>
               </div>

               {/* Desktop Menu */}
               <div className="hidden md:flex items-center space-x-6">
                  {menuItems.map((item) => (
                     <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => handleNavigation(e, item)}
                        className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                        {item.label}
                     </a>
                  ))}

                  {/* Dropdown Laporan */}
                  <div className="relative group">
                     <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                        Laporan
                        <ChevronDown className="w-4 h-4 ml-1" />
                     </button>
                     <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        {laporanItems.map((item) => (
                           <button
                              key={item.label}
                              onClick={() => handleRouteClick(item.href)}
                              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors first:rounded-t-lg last:rounded-b-lg">
                              {item.label}
                           </button>
                        ))}
                     </div>
                  </div>

                  {/* Dropdown Informasi */}
                  <div className="relative group">
                     <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                        Informasi
                        <ChevronDown className="w-4 h-4 ml-1" />
                     </button>
                     <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        {infoItems.map((item) => (
                           <button
                              key={item.label}
                              onClick={() => handleRouteClick(item.href)}
                              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors first:rounded-t-lg last:rounded-b-lg">
                              {item.label}
                           </button>
                        ))}
                     </div>
                  </div>
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
                        onClick={(e) => handleNavigation(e, item)}
                        className="block py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                        {item.label}
                     </a>
                  ))}

                  {/* Mobile Laporan Dropdown */}
                  <div className="py-3">
                     <button
                        onClick={() => setIsLaporanOpen(!isLaporanOpen)}
                        className="flex items-center justify-between w-full text-gray-700 font-medium">
                        Laporan
                        <ChevronDown className={`w-4 h-4 transition-transform ${isLaporanOpen ? "rotate-180" : ""}`} />
                     </button>
                     {isLaporanOpen && (
                        <div className="pl-4 mt-2 space-y-2">
                           {laporanItems.map((item) => (
                              <button
                                 key={item.label}
                                 onClick={() => handleRouteClick(item.href)}
                                 className="block w-full text-left py-2 text-gray-600 hover:text-blue-600">
                                 {item.label}
                              </button>
                           ))}
                        </div>
                     )}
                  </div>

                  {/* Mobile Informasi Dropdown */}
                  <div className="py-3">
                     <div className="text-gray-700 font-medium mb-2">Informasi</div>
                     <div className="pl-4 space-y-2">
                        {infoItems.map((item) => (
                           <button
                              key={item.label}
                              onClick={() => handleRouteClick(item.href)}
                              className="block w-full text-left py-2 text-gray-600 hover:text-blue-600">
                              {item.label}
                           </button>
                        ))}
                     </div>
                  </div>
               </div>
            )}
         </div>
      </nav>
   );
};

export default Navbar;
