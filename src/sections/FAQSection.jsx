import { useState } from "react";

import SectionHeader from "../components/SectionHeader";

const faqs = [
  {
    id: 1,
    question: "¿Qué tipo de cookies venden?",
    answer:
      "Vendemos cookies estilo americano, grandes, suaves por dentro y con distintos sabores como chocolate, nutella, dulce de leche y más.",
  },
  {
    id: 2,
    question: "¿Las cookies se hacen en el día?",
    answer: "Sí, nuestras cookies se hornean frescas todos los días.",
  },
  {
    id: 3,
    question: "¿Hacen pedidos por cantidad?",
    answer: "Sí, podés hacer pedidos para eventos, cumpleaños o reuniones.",
  },
  {
    id: 4,
    question: "¿Dónde están ubicados?",
    answer: "Estamos en Av. José Vicente Zapata 189 y también en Italia 5845, Mendoza.",
  },
  {
    id: 5,
    question: "¿Tienen delivery?",
    answer: "Podés pedir por Pedidos Ya o retirar directamente por el local.",
  },
];

function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="nosotros" className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeader title="Preguntas Frecuentes" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <article
                key={faq.id}
                className="reveal rounded-2xl border border-coolkies-gold/10 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-coolkies-gold/20 hover:shadow-card"
                data-reveal
                style={{ "--reveal-delay": `${index * 80}ms` }}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(faq.id)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                >
                  <span className="text-base font-semibold text-coolkies-dark sm:text-lg">
                    {faq.question}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-coolkies-gold/20 text-xl text-coolkies-gold transition-transform duration-300">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                <div
                  id={`faq-panel-${faq.id}`}
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                    isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pt-4 text-gray-600">{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
