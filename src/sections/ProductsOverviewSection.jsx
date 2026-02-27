import { testimonials } from "../assets/data";
import SectionHeader from "../components/SectionHeader";
import TestimonialCard from "../components/TestimonialCard";

function ProductsOverviewSection() {
  return (
    <section id="nosotros" className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeader title="Lo que dicen nuestros clientes" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsOverviewSection;
