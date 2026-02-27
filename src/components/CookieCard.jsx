import { WHATSAPP_URL } from "../assets/data";
import PrimaryButton from "./PrimaryButton";

function CookieCard({ product, compact = false, actionLabel }) {
  return (
    <article className="group rounded-2xl border border-coolkies-gold/15 bg-white p-4 shadow-card transition-transform duration-300 hover:-translate-y-1 hover:border-coolkies-gold/30">
      <div className={`${compact ? "h-32" : "h-48"} overflow-hidden rounded-xl`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <h3 className={`mt-4 font-semibold text-coolkies-dark ${compact ? "text-base" : "text-xl"}`}>
        {product.name}
      </h3>

      {product.description ? (
        <p className="mt-1 text-sm text-gray-600 sm:text-base">{product.description}</p>
      ) : null}

      <div className="mt-4 flex items-center justify-between">
        <p className={`${compact ? "text-lg" : "text-2xl"} font-bold text-coolkies-yellow`}>
          {product.price}
        </p>

        {actionLabel ? (
          <PrimaryButton href={WHATSAPP_URL} target="_blank" className="h-10 px-5 text-sm" variant="yellow">
            {actionLabel}
          </PrimaryButton>
        ) : null}
      </div>
    </article>
  );
}

export default CookieCard;
