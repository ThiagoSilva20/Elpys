import LandingHeader from "./_components/landingpage/header";
import HeroSection from "./_components/landingpage/hero-section";
import HowItsWorksSection from "./_components/landingpage/howitsworks-section";
import BenefitsSection from "./_components/landingpage/benefits-section";
import TestimonialsSection from "./_components/landingpage/testimonials-section";
import CtaAdvertiseSection from "./_components/landingpage/ctaadvertise-section";
import Footer from "./_components/landingpage/footer";
import FaqSection from "./_components/landingpage/faq-section";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <LandingHeader />
      <main className="flex-1">
        <HeroSection />
        <HowItsWorksSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaAdvertiseSection />
      </main>
      <Footer />
    </div>
  );
}
