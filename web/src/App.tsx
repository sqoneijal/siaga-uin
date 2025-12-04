import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Announcements from "@/pages/Announcements";
import DistributionReport from "@/pages/DistributionReport";
import HomePage from "@/pages/HomePage";
import ImportantLinks from "@/pages/ImportantLinks";
import ReceiverReport from "@/pages/ReceiverReport";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Navbar />
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/laporan-penerimaan" element={<ReceiverReport />} />
               <Route path="/laporan-penyaluran" element={<DistributionReport />} />
               <Route path="/pengumuman" element={<Announcements />} />
               <Route path="/link-penting" element={<ImportantLinks />} />
            </Routes>
            <Footer />
            <Toaster />
         </div>
      </BrowserRouter>
   );
}

export default App;
