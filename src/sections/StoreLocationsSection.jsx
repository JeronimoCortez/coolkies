import { wholesaleBenefits, wholesaleImage, WHATSAPP_URL } from "../assets/data";
import { CheckIcon, WhatsAppIcon } from "../components/Icons";
import PrimaryButton from "../components/PrimaryButton";
import SectionHeader from "../components/SectionHeader";

function StoreLocationsSection() {
  return (
    <section id="mayorista" className="bg-coolkies-dark py-16 sm:py-20">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <SectionHeader
            title="Tenes un negocio?"
            subtitle="Ofrece las mejores cookies a tus clientes. Precios especiales para mayoristas, cafeterias, restaurantes y eventos."
            light
          />

          <ul className="mt-8 space-y-4">
            {wholesaleBenefits.map((benefit) => (
              <li key={benefit.id} className="flex items-center gap-3 text-white">
                <CheckIcon className="h-4 w-4 text-coolkies-yellow" />
                <span>{benefit.text}</span>
              </li>
            ))}
          </ul>

          <PrimaryButton
            as="a"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            variant="yellow"
            className="mt-8"
            icon={<WhatsAppIcon className="h-5 w-5" />}
          >
            Consulta por mayorista
          </PrimaryButton>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src={wholesaleImage}
            alt="Cookies para negocios mayoristas"
            className="h-[360px] w-full object-cover sm:h-[420px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default StoreLocationsSection;
