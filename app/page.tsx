import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeBelowFoldLoader } from "@/components/home/HomeBelowFoldLoader";
import { SWEET_SUNSET_FEATURED_CARD_IMAGE } from "@/lib/homeFeaturedAssets";

export default function Home() {
  return (
    <>
      <link rel="preload" href={SWEET_SUNSET_FEATURED_CARD_IMAGE} as="image" />
      <Header />
      <main className="overflow-x-clip">
        <HeroSection />
        <HomeBelowFoldLoader />
      </main>
      <Footer />
    </>
  );
}
