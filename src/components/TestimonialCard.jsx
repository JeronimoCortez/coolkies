import { StarRating } from "./Icons";

function TestimonialCard({ testimonial, revealDelay = 0 }) {
  return (
    <article
      className="reveal rounded-2xl border border-coolkies-gold/10 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-coolkies-gold/20 hover:shadow-card"
      data-reveal
      style={{ "--reveal-delay": `${revealDelay}ms` }}
    >
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
