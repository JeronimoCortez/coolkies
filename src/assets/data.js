export const WHATSAPP_NUMBER_DISPLAY = "+54 9 2617267607";
export const WHATSAPP_NUMBER_E164 = "5492617267607";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER_E164}`;

export const navigationLinks = [
  { id: 1, label: "Productos", href: "#productos" },
  { id: 2, label: "Mayorista", href: "#mayorista" },
  { id: 3, label: "Ubicaciones", href: "#ubicaciones" },
  { id: 4, label: "Nosotros", href: "#nosotros" },
];

export const heroData = {
  titleA: "Las mejores",
  titleB: "Cookies",
  titleC: "de la ciudad",
  subtitle:
    "Cookies estilo americano, grandes, gourmet y irresistibles. El antojo que no podras resistir.",
  image: "./cookies-hero.webp",
};

export const bestSellers = [
  {
    id: 1,
    name: "Kinder Nutella",
    description: "La combinación que enamora a todos",
    // price: "$450",
    image: "/kinder.webp",
  },
  {
    id: 2,
    name: "Doble Choco Nutella",
    description: "Para los adictos al chocolate",
    // price: "$480",
    image: "./doblechoco-nutella.webp",
  },
  {
    id: 3,
    name: "Red Velvet",
    description: "Suave, cremosa y adictiva",
    // price: "$520",
    image: "./red-velvet.webp",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Maria Gonzalez",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    text: '"Las mejores cookies que probe en mi vida. Son enormes y super ricas."',
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    text: '"Perfectas para la oficina. La calidad es increible y llegan rapido."',
  },
  {
    id: 3,
    name: "Ana Lopez",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80",
    text: '"Mis hijos estan obsesionados. En cada cumpleanos pedimos Coolkies."',
  },
];

export const allFlavors = [
  {
    id: 1,
    name: "Cuchareable Kinder",
    // price: "$450",
    image: "./cuchareable1.webp",
  },
  {
    id: 2,
    name: "Cuchareable",
    // price: "$500",
    image: "/cuchareable.webp",
  },
  {
    id: 3,

    name: "Clasica Chips",
    // price: "$420",
    image: "./chips.webp",
  },
  {
    id: 4,
    name: "Kinder Nutella",
    // price: "$480",
    image:
      "./kinder.webp",
  },
];

export const wholesaleBenefits = [
  { id: 1, text: "Precios mayoristas competitivos" },
  { id: 2, text: "Entrega puntual garantizada" },
  { id: 3, text: "Asesoramiento personalizado" },
];

export const wholesaleImage = "./negocio-mayorista.jpeg";

export const branches = [
  {
    id: 1,
    name: "Sucursal Centro",
    address: "Av. José Vicente Zapata 189,Mendoza",
    hours: "Lun a Vie: 10:00 - 19:00, Sáb: 10:00 - 13:00. 17:00 - 20:00",
    phone: WHATSAPP_NUMBER_DISPLAY,
    href: "https://maps.app.goo.gl/4H6fxh1BAjCpXQ4a8",
  },
  {
    id: 2,
    name: "Sucursal Chacras",
    address: "Italia 5845, Mendoza",
    hours: "Lun: 11:30 - 20:00. Mar a Vie: 15:00 a 20:00. Sáb: 16:00 - 20:00",
    phone: WHATSAPP_NUMBER_DISPLAY,
    href: "https://maps.app.goo.gl/pNVWbDPJwtQ2Vevq6",
  },
];

export const footerData = {
  brand: {
    name: "Coolkies",
    description: "Las mejores cookies estilo americano de la ciudad.",
  },
  sections: [
    {
      title: "Productos",
      links: ["Cookies Clasicas", "Ediciones Especiales", "Combos"],
    },
    {
      title: "Empresa",
      links: ["Sobre Nosotros", "Mayoristas", "Trabaja con nosotros"],
    },
    {
      title: "Contacto",
      links: [
        { label: `WhatsApp: ${WHATSAPP_NUMBER_DISPLAY}`, href: WHATSAPP_URL },
        "Email: hola@coolkies.com",
        "Horarios: 10:00 - 19:00",
      ],
    },
  ],
  copyright: "© 2024 Coolkies. Todos los derechos reservados.",
};
