import { StarRating } from "./Icons";

function TestimonialCard({ testimonial }) {
  return (
    <article className="rounded-2xl border border-coolkies-gold/10 bg-gray-50 p-6 transition-all duration-300 hover:border-coolkies-gold/20 hover:shadow-card">
      <div className="flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full object-cover"
          loading="lazy"
        />

        <div>
          <p className="font-semibold text-coolkies-dark">{testimonial.name}</p>
          <StarRating />
        </div>
      </div>

      <p className="mt-4 text-gray-600">{testimonial.text}</p>
    </article>
  );
}

export default TestimonialCard;
