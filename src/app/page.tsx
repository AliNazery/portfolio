import About from "@/Components/About/About";
import Hero from "@/Components/Hero/Hero";
import Services from "@/Components/MyServices/Services";
import ThemeComponent from "@/Components/theme/ThemeComponent";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services/>
    </>
     );
}
