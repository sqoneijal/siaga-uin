import { Route, Routes } from "react-router";
import { Card, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import Berita from "./pages/berita";
import BeritaActions from "./pages/berita/actions";
import Galleri from "./pages/galleri";
import GalleriActions from "./pages/galleri/actions";
import LaporanPenerimaan from "./pages/laporan/penerimaan";
import LaporanPenyaluran from "./pages/laporan/penyaluran";
import LaporanPenyaluranActions from "./pages/laporan/penyaluran/actions";
import LinkPendataan from "./pages/link-pendataan";
import Misi from "./pages/misi";
import Program from "./pages/program";
import ProgramActions from "./pages/program/actions";
import Visi from "./pages/visi";

export default function Routing() {
   return (
      <Routes>
         <Route
            path="/"
            element={
               <Card>
                  <CardHeader className="text-center">
                     <CardTitle className="text-xl">Admin Dashboard</CardTitle>
                     <CardDescription>Welcome back! You are logged in.</CardDescription>
                  </CardHeader>
               </Card>
            }
         />
         <Route path="/link-pendataan" element={<LinkPendataan />} />
         <Route path="/program" element={<Program />} />
         <Route path="/program/actions" element={<ProgramActions />} />
         <Route path="/program/actions/:id" element={<ProgramActions />} />
         <Route path="/visi" element={<Visi />} />
         <Route path="/misi" element={<Misi />} />
         <Route path="/galleri" element={<Galleri />} />
         <Route path="/galleri/actions" element={<GalleriActions />} />
         <Route path="/berita" element={<Berita />} />
         <Route path="/berita/actions" element={<BeritaActions />} />
         <Route path="/berita/actions/:id" element={<BeritaActions />} />
         <Route path="/laporan/penerimaan" element={<LaporanPenerimaan />} />
         <Route path="/laporan/penyaluran" element={<LaporanPenyaluran />} />
         <Route path="/laporan/penyaluran/actions" element={<LaporanPenyaluranActions />} />
         <Route path="/laporan/penyaluran/actions/:id" element={<LaporanPenyaluranActions />} />
      </Routes>
   );
}
