import { Route, Routes } from "react-router";
import { Card, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
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
      </Routes>
   );
}
