import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Locations from "./components/Locations";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import FloatingOrderButton from "./components/FloatingOrderButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Locations />
      <Reviews />
      <Footer />
      <FloatingOrderButton />
    </>
  );
}
