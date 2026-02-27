import { allFlavors, WHATSAPP_URL } from "../assets/data";
import { WhatsAppIcon } from "../components/Icons";
import CookieCard from "../components/CookieCard";
import PrimaryButton from "../components/PrimaryButton";
import SectionHeader from "../components/SectionHeader";

function BusinessInquirySection() {
  return (
    <section id="sabores" className="bg-gray-50 py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeader
          title="Todos Nuestros Sabores"
          subtitle="Cada cookie es una experiencia unica"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {allFlavors.map((product) => (
            <CookieCard key={product.id} product={product} compact />
          ))}
        </div>

        <div className="mt-10 text-center">
          <PrimaryButton
            as="a"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            variant="yellow"
            icon={<WhatsAppIcon className="h-5 w-5" />}
          >
            Ver carta completa
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default BusinessInquirySection;
