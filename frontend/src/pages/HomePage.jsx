import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Model360 from "../components/Model360";
import VideoAnalysis from "../components/VideoAnalysis";
import Players from "../components/Players";
import Team from "../components/Team";
import Timeline from "../components/Timeline";
import Residencia from "../components/Residencia";
import Aurum from "../components/Aurum";
import InstagramSection from "../components/InstagramSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div data-testid="home-page" className="bg-[#06121F] min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Model360 />
        <VideoAnalysis />
        <Players />
        <Team />
        <Timeline />
        <Residencia />
        <Aurum />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
