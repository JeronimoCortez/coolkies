import { heroData, WHATSAPP_URL } from "../assets/data";
import { WhatsAppIcon } from "../components/Icons";
import PrimaryButton from "../components/PrimaryButton";

function HeroBannerSection() {
  return (
    <section className="bg-heroGradient py-12 sm:py-16 lg:py-20">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <h1 className="font-display text-5xl leading-tight tracking-tight text-coolkies-dark sm:text-6xl md:text-7xl">
            {heroData.titleA}
            <br />
            <span className="text-coolkies-yellow">{heroData.titleB}</span> {heroData.titleC}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-700 sm:text-xl">{heroData.subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryButton
              as="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              variant="yellow"
              icon={<WhatsAppIcon className="h-5 w-5" />}
            >
              Pedi por WhatsApp
            </PrimaryButton>

            <PrimaryButton
              as="a"
              href="https://www.pedidosya.com"
              target="_blank"
              rel="noreferrer"
              variant="dark"
            >
              Ver en PedidosYa
            </PrimaryButton>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroData.image}
            alt="Deliciosas cookies estilo americano"
            className="h-[420px] w-full rounded-3xl object-cover shadow-hero sm:h-[520px] lg:h-[584px]"
          />

          <p className="absolute right-4 top-4 rounded-full bg-coolkies-yellow px-5 py-2 text-sm font-bold text-coolkies-dark sm:text-base">
            Nuevos sabores
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroBannerSection;
