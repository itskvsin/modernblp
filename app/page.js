import About from "@/pages/about";
import Cta from "@/pages/cta";
import Features from "@/pages/features";
import Footer from "@/pages/footer";
import Hero from "@/pages/hero";
import Process from "@/pages/process";
import Testimonials from "@/pages/testimonials";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* About Section */}
      <About />

      {/* Process Section */}
      <Process />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <Cta />

      {/* Footer */}
      <Footer />
    </div>
  )
}
