import CallToAction from "@/components/CallToActions";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MainLayout from "@/components/Layout/MainLayout";
import Pricing from "@/components/Pricing";
import Templates from "@/components/Templates";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="hide-vertical-scrollbar">
      <MainLayout>
        <Hero />
        <Features />
        <HowItWorks />
        <Templates />
        <Testimonials />
        <Pricing />
        <CallToAction />
      </MainLayout>
    </div>
  );
}
