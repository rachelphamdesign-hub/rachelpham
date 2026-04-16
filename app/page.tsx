import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeBelowFoldLoader } from "@/components/home/HomeBelowFoldLoader";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <HeroSection />
        <HomeBelowFoldLoader />
      </main>
      <Footer />
    </>
  );
}
