import About from "@/components/About";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Programs from "@/components/Programs";
import RegistrationForm from "@/components/RegistrationForm";
import Statistics from "@/components/Statistics";

const HomePage = () => {
   return (
      <>
         <Hero />
         <About />
         <Programs />
         <Statistics />
         <News />
         <Gallery />
         <RegistrationForm />
         <Contact />
      </>
   );
};

export default HomePage;
