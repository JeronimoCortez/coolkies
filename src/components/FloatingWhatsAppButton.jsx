import { WHATSAPP_URL } from "../assets/data";
import { WhatsAppIcon } from "./Icons";

const PREDEFINED_MESSAGE = "Hola! Quiero hacer un pedido de Coolkies";

function FloatingWhatsAppButton() {
  const whatsappLink = `${WHATSAPP_URL}?text=${encodeURIComponent(PREDEFINED_MESSAGE)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp y enviar mensaje predefinido"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:scale-105 hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}

export default FloatingWhatsAppButton;
