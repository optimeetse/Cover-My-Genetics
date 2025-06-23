import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import WhoIsGenie from "@/components/who-is-genie"
import FeaturesSection from "@/components/features-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <WhoIsGenie />
      <FeaturesSection />
      <Footer />
    </main>
  )
}
