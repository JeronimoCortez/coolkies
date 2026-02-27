import { WhatsAppIcon } from "../components/Icons";
import PrimaryButton from "../components/PrimaryButton";
import { WHATSAPP_URL } from "../assets/data";

function CustomerTestimonialsSection() {
  return (
    <section className="bg-ctaGradient py-16 sm:py-20">
      <div className="section-shell text-center">
        <h2 className="font-display text-3xl text-coolkies-dark sm:text-4xl">
          Se te hizo agua la boca?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-coolkies-dark/80">
          No esperes mas. Pedi tus cookies favoritas ahora y recibilas en tu casa.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton
            as="a"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            variant="dark"
            icon={<WhatsAppIcon className="h-5 w-5" />}
          >
            Pedi por WhatsApp
          </PrimaryButton>

          <PrimaryButton
            as="a"
            href="https://www.pedidosya.com"
            target="_blank"
            rel="noreferrer"
            variant="light"
          >
            Ver en PedidosYa
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default CustomerTestimonialsSection;
