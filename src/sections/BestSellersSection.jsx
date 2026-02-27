import { branches } from "../assets/data";
import LocationCard from "../components/LocationCard";
import SectionHeader from "../components/SectionHeader";

function BestSellersSection() {
  return (
    <section id="ubicaciones" className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeader title="Nuestras Sucursales" subtitle="Visitanos o pedi delivery" />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {branches.map((branch) => (
            <LocationCard key={branch.id} branch={branch} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestSellersSection;
