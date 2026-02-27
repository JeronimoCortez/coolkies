import { bestSellers, WHATSAPP_URL } from "../assets/data";
import CookieCard from "../components/CookieCard";
import PrimaryButton from "../components/PrimaryButton";
import SectionHeader from "../components/SectionHeader";

function FlavorsShowcaseSection() {
  return (
    <section id="productos" className="bg-gray-50 py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeader
          title="Mas Vendidas"
          subtitle="Las cookies que vuelven locos a todos. Proba nuestros bestsellers."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {bestSellers.map((product) => (
            <CookieCard key={product.id} product={product} actionLabel="Comprar" />
          ))}
        </div>

        <div className="mt-10">
          <PrimaryButton href="#sabores" className="w-full justify-center" variant="dark" >
            Ver todos los productos
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default FlavorsShowcaseSection;
