import { ClockIcon, MapPinIcon, WhatsAppIcon } from "./Icons";
import PrimaryButton from "./PrimaryButton";

function LocationCard({ branch, revealDelay = 0 }) {
  const whatsappNumber = branch.phone.replace(/\D/g, "");

  return (
    <article
      className="reveal rounded-2xl border border-coolkies-gold/10 bg-gray-50 p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-card"
      data-reveal
      style={{ "--reveal-delay": `${revealDelay}ms` }}
    >
      {/*
      <div className="mb-5 overflow-hidden rounded-xl">
        {branch.image ? (
          <img
            src={branch.image}
            alt={`Frente del local ${branch.name}`}
            className="h-40 w-full object-cover sm:h-48"
            loading="lazy"
          />
        ) : (
          <div className="flex h-40 w-full items-center justify-center bg-coolkies-yellow/20 text-sm font-semibold text-coolkies-dark/60 sm:h-48">
            Imagen del local
          </div>
        )}
      </div>
      */}
      <h3 className="text-xl font-bold text-coolkies-dark">{branch.name}</h3>

      <div className="mt-4 space-y-3 text-gray-700">
        <p className="flex items-center gap-3">
          <MapPinIcon className="h-4 w-4 text-coolkies-dark" />
          <span>{branch.address}</span>
        </p>
        <p className="flex items-center gap-3">
          <ClockIcon className="h-4 w-4 text-coolkies-dark" />
          <span>{branch.hours}</span>
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3"
        >
          <WhatsAppIcon className="h-4 w-4 text-coolkies-dark" />
          <span>{branch.phone}</span>
        </a>
      </div>

      <PrimaryButton href={branch.href} target="_blank" className="mt-6 w-full justify-center" variant="yellow">
        Ver en mapa
      </PrimaryButton>
    </article>
  );
}

export default LocationCard;
