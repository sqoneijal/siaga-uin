import About from "@/components/About";
import Contact from "@/components/Contact";
import "./App.css";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Programs from "./components/Programs";
import RegistrationForm from "./components/RegistrationForm";
import Statistics from "./components/Statistics";
import { Toaster } from "./components/ui/toaster";

function App() {
   return (
      <div className="App">
         <Navbar />
         <Hero />
         <About />
         <Programs />
         <Statistics />
         <News />
         <Gallery />
         <RegistrationForm />
         <Contact />
         <Footer />
         <Toaster />
      </div>
   );
}

export default App;
