import {
  AboutSection,
  Hero,
  ProductSection,
  ContactSection,
} from "@/components/custom";

export default function Home() {
  return (
    <div className="bg-green-50 min-h-screen">
      <Hero />
      <ProductSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
