import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import WhyChooseUs from "@/components/WhyChooseUs";
import Founder from "@/components/Founder";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import DemoForm from "@/components/DemoForm";
import ContactLocation from "@/components/ContactLocation";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Courses />
        <WhyChooseUs />
        <Founder />
        <Gallery />
        <Testimonials />
        <DemoForm />
        <ContactLocation />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}
