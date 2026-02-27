import BestSellersSection from "../sections/BestSellersSection";
import BusinessInquirySection from "../sections/BusinessInquirySection";
import CustomerTestimonialsSection from "../sections/CustomerTestimonialsSection";
import FlavorsShowcaseSection from "../sections/FlavorsShowcaseSection";
import FooterSection from "../sections/FooterSection";
import HeroBannerSection from "../sections/HeroBannerSection";
import NavigationHeaderSection from "../sections/NavigationHeaderSection";
import ProductsOverviewSection from "../sections/ProductsOverviewSection";
import StoreLocationsSection from "../sections/StoreLocationsSection";

function LandingLayout() {
  return (
    <div className="bg-white">
      <NavigationHeaderSection />

      <main className="pt-20">
        <HeroBannerSection />
        <FlavorsShowcaseSection />
        <ProductsOverviewSection />
        <BusinessInquirySection />
        <StoreLocationsSection />
        <BestSellersSection />
        <CustomerTestimonialsSection />
      </main>

      <FooterSection />
    </div>
  );
}

export default LandingLayout;
