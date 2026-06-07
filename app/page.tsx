import Nav from "@/components/Nav";
import Countdown from "@/components/Countdown";
import Hero from "@/components/Hero";
import HoeHetWerkt from "@/components/HoeHetWerkt";
import FoundingMember from "@/components/FoundingMember";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Countdown />
      <Nav />
      <main>
        <Hero />
        <HoeHetWerkt />
        <FoundingMember />
      </main>
      <Footer />
    </div>
  );
}
