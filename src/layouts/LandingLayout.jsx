import BestSellersSection from "../sections/BestSellersSection";
import BusinessInquirySection from "../sections/BusinessInquirySection";
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";
import CustomerTestimonialsSection from "../sections/CustomerTestimonialsSection";
import FlavorsShowcaseSection from "../sections/FlavorsShowcaseSection";
import FAQSection from "../sections/FAQSection";
import FooterSection from "../sections/FooterSection";
import HeroBannerSection from "../sections/HeroBannerSection";
import NavigationHeaderSection from "../sections/NavigationHeaderSection";
import StoreLocationsSection from "../sections/StoreLocationsSection";
import useScrollReveal from "../hooks/useScrollReveal";

function LandingLayout() {
  useScrollReveal();

  return (
    <div className="bg-white">
      <NavigationHeaderSection />

      <main className="pt-20">
        <HeroBannerSection />
        <FlavorsShowcaseSection />
        <FAQSection />
        <BusinessInquirySection />
        <StoreLocationsSection />
        <BestSellersSection />
        <CustomerTestimonialsSection />
      </main>

      <FooterSection />
      <FloatingWhatsAppButton />
    </div>
  );
}

export default LandingLayout;
