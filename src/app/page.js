import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PortfolioSection from "./components/PortfolioSection";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <PortfolioSection />
      <Footer />
    </div>
  );
}
