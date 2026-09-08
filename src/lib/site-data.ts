/**
 * Single source of truth for all site content — ZAIN REAL ESTATE, Sukkur.
 */

import brandOffice from "@/assets/zain-brand-office.jpg.asset.json";
import houseForSale from "@/assets/zain-house-for-sale.jpg.asset.json";
import plotCmt2 from "@/assets/zain-plot-cmt2.jpg.asset.json";


export const img = {
  logo: "/zain-logo.png",

  spanishVilla: "/homes/hero-spanish.jpg",
  luxuryVilla: "/homes/hero-villa.jpg",
  luxuryHouse: "/homes/hero-luxury.jpg",
  courtyard: "/homes/hero-courtyard.jpg",

  modernVilla: "/homes/home-1.jpg",
  classicMansion: "/homes/home-2.jpg",
  greyClassic: "/homes/home-3.jpg",
  completedVilla: "/homes/home-4.jpg",
  brickFront: "/homes/home-5.jpg",
};

export const showreelUrl = "/video/showreel.mp4";

export const site = {
  name: "Zain Real Estate",
  short: "Zain",
  fullName: "Zain Real Estate — Consultant & Marketing, Sukkur",
  tagline: "Consultant & Marketing",
  owner: "Hizb Ullah Abro",
  logo: img.logo,
  address: "B-52, Delhi Muslim Society, Near Sukkur IBA University, Sukkur, Pakistan",
  addressShort: "Delhi Muslim Society, Sukkur",
  email: "zainrealestate.sukkur@gmail.com",
  phone: "0313-5974923",
  phoneTel: "+923135974923",
  facebook: "https://facebook.com/",
  instagram: "https://instagram.com/",
  youtube: "https://youtube.com/",
  maps: "https://maps.google.com/?q=Delhi+Muslim+Society+Near+Sukkur+IBA+University+Sukkur",
  whatsapp:
    "https://wa.me/923135974923?text=Hello%20Zain%20Real%20Estate%2C%20I%20am%20interested%20in%20a%20property%20in%20Sukkur.",
  hours: [
    { day: "Monday to Saturday", time: "10:00 AM to 7:00 PM" },
    { day: "Sunday", time: "By appointment" },
  ],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Properties" },
  { to: "/contact", label: "Contact" },
];

export const highlights = [
  { icon: "🏡", label: "New Projects Booking" },
  { icon: "🏠", label: "Sale & Purchase" },
  { icon: "🔑", label: "Rent" },
];

export const heroSlides = [
  {
    title: "Deals in All Kinds of Property in Sukkur",
    highlight:
      "Plots, houses, flats, shops and commercial buildings — bought, sold and rented with honest guidance.",
    image: img.luxuryVilla,
  },
  {
    title: "New project bookings, sale, purchase & rent",
    highlight: "Priority booking in Sukkur's best upcoming housing societies and commercial projects.",
    image: img.spanishVilla,
  },
  {
    title: "Your trusted property partner in Sukkur",
    highlight: "Led by Hizb Ullah Abro — full documentation support from booking to registry.",
    image: img.luxuryHouse,
  },
];

export const stats = [
  { value: "100%", label: "Documentation support" },
  { value: "4", label: "Core services" },
  { value: "1", label: "Trusted local name" },
];

export const about = {
  heading: "Your Trusted Property Partner in Sukkur",
  paragraphs: [
    "Zain Real Estate is a leading real estate consultancy and marketing firm based in Sukkur.",
    "Led by Hizb Ullah Abro, we specialize in New Projects Booking, Sale, Purchase & Rent of all kinds of residential and commercial property.",
    "With deep local market knowledge and a commitment to transparency, we help buyers, sellers, and investors make the right property decisions.",
    "Our work began with a simple belief: property dealing in Sukkur should be straightforward. No hidden commissions, no exaggerated rates and no paperwork surprises after the deal is signed. That belief still guides every file we open.",
    "Today we work across Delhi Muslim Society, the Sukkur IBA University belt, 100 Ft Road, Mehran Society, Airport Road and the new housing schemes on the city's edge — covering plots, houses, flats, shops, offices and full commercial buildings.",
    "We deal party to party wherever possible, so the buyer and the seller sit at the same table, see the same documents and agree on the same figure. That is the shortest route to a clean, honest deal.",
  ],
};

/** Party-to-party promise, shown in Urdu and English. */
export const partyDeal = {
  eyebrow: "Party-to-Party Deal",
  titleUrdu: "سکھر میں Property Sale & Purchase؟",
  title: "Buying or selling property in Sukkur?",
  introUrdu:
    "اگر کسی دوست کو سکھر میں پراپرٹی خریدنی یا فروخت کرنی ہو تو ہم سے رابطہ کریں۔ آپ کی پراپرٹی، ہماری ذمہ داری!",
  intro:
    "If you or a friend needs to buy or sell property in Sukkur, talk to us first. Your property is our responsibility.",
  points: [
    { icon: "🤝", urdu: "صاف، شفاف اور اعتماد کے ساتھ ڈیل", en: "Clear, transparent dealing built on trust" },
    { icon: "📍", urdu: "مناسب پراپرٹی اور بہتر مواقع", en: "The right property and better opportunities" },
    { icon: "💼", urdu: "Party-to-Party Deal", en: "Direct party-to-party deals, no middle chain" },
    { icon: "📞", urdu: "رابطہ کریں: 0313-5974923", en: "Call or WhatsApp us: 0313-5974923" },
  ],
};


export const services = [
  {
    slug: "new-projects",
    title: "New Project Bookings",
    image: img.luxuryHouse,
    short: "Priority booking in the best upcoming housing societies and commercial projects in Sukkur.",
    body: "Get priority booking in the best upcoming housing societies and commercial projects in Sukkur.",
  },
  {
    slug: "sale-purchase",
    title: "Property Sale & Purchase",
    image: img.brickFront,
    short: "Plots, Houses, Flats, Shops and Commercial Buildings across Sukkur.",
    body: "We deal in Plots, Houses, Flats, Shops, and Commercial Buildings across Sukkur.",
  },
  {
    slug: "rent",
    title: "Rental Services",
    image: img.greyClassic,
    short: "Find your ideal home, office or shop on rent in prime locations.",
    body: "Find your ideal home, office, or shop on rent in prime locations.",
  },
  {
    slug: "marketing",
    title: "Property Marketing & Consultation",
    image: img.classicMansion,
    short: "Selling your property? We market it to the right buyers.",
    body: "Selling your property? We market it to the right buyers. Buying property? We guide you to the best investment.",
  },
];

export const whyChooseUs = [
  {
    title: "Local Expertise",
    body: "Deep knowledge of Sukkur's property market including IBA University area, Delhi Muslim Society and 100 Ft Road.",
  },
  {
    title: "All Property Types",
    body: "Residential, Commercial, Plots and Projects — all under one roof.",
  },
  {
    title: "Trusted Name",
    body: "Hizb Ullah Abro — honest deals and full documentation support.",
  },
  {
    title: "One-Stop Solution",
    body: "From booking to registry, we handle everything for you.",
  },
];

/** Branded social posts — shown full-frame, never cropped. */
export const posts = [
  { image: brandOffice.url, title: "Buy · Sell · Invest · Consult", location: "Sukkur, Pakistan", tag: "Zain Real Estate" },
  { image: houseForSale.url, title: "Double Storey House For Sale", location: "Near Main Road, Sukkur", tag: "For Sale" },
  { image: plotCmt2.url, title: "Plot For Sale — CMT2 Sukkur", location: "CMT2, Sukkur", tag: "For Sale" },
  { image: "/posts/post-1.jpg", title: "New Project Booking", location: "Sukkur", tag: "Open" },
  { image: "/posts/post-2.jpg", title: "Residential Plots", location: "Sukkur", tag: "Available" },
  { image: "/posts/post-4.jpg", title: "Commercial Shops", location: "Sukkur", tag: "For Sale" },
  { image: "/posts/post-8.jpg", title: "Houses on Rent", location: "Sukkur", tag: "For Rent" },
];


export const testimonials = [
  {
    name: "Imran Shaikh",
    role: "Buyer · Delhi Muslim Society, Sukkur",
    quote: "Zain Real Estate handled my plot purchase and complete registry paperwork without any hassle.",
  },
  {
    name: "Nadia Memon",
    role: "Tenant · Near Sukkur IBA University",
    quote: "They found us a house on rent in two days, exactly in the area and budget we asked for.",
  },
  {
    name: "Asif Abro",
    role: "Investor · Sukkur",
    quote: "Honest advice on which new project to book. Hizb Ullah bhai guided every step clearly.",
  },
];

export const registrations = [
  "Sukkur",
  "New Projects Booking",
  "Sale & Purchase",
  "Rent",
  "Property Marketing",
  "Consultation",
];

export const process = [
  { step: "01", title: "Consultation", body: "Tell us your budget, area and property type — on call or WhatsApp." },
  { step: "02", title: "Shortlist", body: "We shortlist verified options across Sukkur that match your needs." },
  { step: "03", title: "Visit & Deal", body: "Site visits, price negotiation and a transparent agreement." },
  { step: "04", title: "Registry", body: "Full documentation support right through to registry and handover." },
];

export const galleryImages = [
  img.luxuryVilla,
  img.spanishVilla,
  img.luxuryHouse,
  img.courtyard,
  img.modernVilla,
  img.classicMansion,
  img.greyClassic,
  img.completedVilla,
  img.brickFront,
];

export type Listing = {
  slug: string;
  title: string;
  type: "Plot" | "House" | "Shop" | "Commercial";
  purpose: "Sale" | "Rent" | "Booking";
  location: string;
  area: string;
  price: string;
  image: string;
  gallery: string[];
  features: string[];
  description: string;
};

export const listings: Listing[] = [
  {
    slug: "bungalow-mehran-society",
    title: "Bungalow For Sale — Mehran Society",
    type: "House",
    purpose: "Sale",
    location: "Mehran Society, Sukkur",
    area: "400 sq yd",
    price: "Demand: 7 Crore",
    image: img.courtyard,
    gallery: [img.courtyard, img.luxuryHouse, img.completedVilla],
    features: [
      "Plot size 400 sq yd",
      "9 bedrooms",
      "1 drawing room + 2 TV lounges",
      "2 kitchens",
      "Car parking",
      "Spacious residential property, ideal for a large family",
      "Demand: 7 Crore — serious buyers only",
    ],
    description:
      "A beautiful, spacious and impressive bungalow in Mehran Society, Sukkur — built for a large family. 400 sq yd plot with 9 bedrooms, a drawing room, two TV lounges, two kitchens and car parking. سکھر میں بڑی فیملی کے لیے خوبصورت، کشادہ اور شاندار بنگلہ فروخت کے لیے دستیاب ہے۔ صرف Serious Buyers رابطہ کریں۔ Call 0313-5974923 for full details, a visit and the deal.",
  },
  {
    slug: "dms-residential-plot",
    title: "Residential Plot — Delhi Muslim Society",
    type: "Plot",
    purpose: "Sale",
    location: "Delhi Muslim Society, Sukkur",
    area: "120 sq yd",
    price: "On request",
    image: img.modernVilla,
    gallery: [img.modernVilla, img.brickFront, img.greyClassic],
    features: ["Clear title, transfer-ready", "Near Sukkur IBA University", "Water, gas and electricity available", "Wide carpeted road"],
    description:
      "A well-located residential plot in Delhi Muslim Society, ideal for building a family home. Walking distance from Sukkur IBA University with all utilities available at the doorstep.",
  },
  {
    slug: "double-storey-house-dms",
    title: "Double Storey House — Near IBA University",
    type: "House",
    purpose: "Sale",
    location: "Delhi Muslim Society, Sukkur",
    area: "240 sq yd",
    price: "On request",
    image: img.luxuryHouse,
    gallery: [img.luxuryHouse, img.courtyard, img.luxuryVilla],
    features: ["5 bedrooms with attached baths", "2 kitchens and 2 TV lounges", "Car porch and rooftop terrace", "Full documentation support"],
    description:
      "A spacious double-storey family house near Sukkur IBA University. Solid construction, bright rooms and a peaceful street — ready to move in.",
  },
  {
    slug: "commercial-shop-100ft-road",
    title: "Commercial Shop — 100 Ft Road",
    type: "Shop",
    purpose: "Sale",
    location: "100 Ft Road, Sukkur",
    area: "180 sq ft",
    price: "On request",
    image: img.brickFront,
    gallery: [img.brickFront, img.greyClassic, img.modernVilla],
    features: ["Prime commercial location", "High footfall market area", "Suitable for retail or office", "Registry-ready documents"],
    description:
      "A commercial shop on Sukkur's busy 100 Ft Road — an excellent investment for rental income or your own business.",
  },
  {
    slug: "family-house-rent-iba",
    title: "Family House on Rent — IBA Area",
    type: "House",
    purpose: "Rent",
    location: "Near Sukkur IBA University",
    area: "160 sq yd",
    price: "On request",
    image: img.greyClassic,
    gallery: [img.greyClassic, img.completedVilla, img.courtyard],
    features: ["3 bedrooms, drawing and dining", "Separate entrance", "Ideal for faculty and families", "Immediate possession"],
    description:
      "A clean, well-maintained house on rent near Sukkur IBA University. Perfect for faculty members, students' families and professionals.",
  },
  {
    slug: "new-society-booking",
    title: "New Project Booking — Residential Plots",
    type: "Plot",
    purpose: "Booking",
    location: "Sukkur",
    area: "80 to 240 sq yd",
    price: "Easy instalments",
    image: img.spanishVilla,
    gallery: [img.spanishVilla, img.classicMansion, img.luxuryVilla],
    features: ["Priority booking at launch rates", "Easy instalment plans", "Gated and planned community", "Full booking-to-registry support"],
    description:
      "Priority booking of residential plots in Sukkur's best upcoming housing projects. Book at launch rates with flexible instalment plans through Zain Real Estate.",
  },
  {
    slug: "commercial-building-sukkur",
    title: "Commercial Building — Investment Opportunity",
    type: "Commercial",
    purpose: "Sale",
    location: "Sukkur City",
    area: "Multi-floor",
    price: "On request",
    image: img.classicMansion,
    gallery: [img.classicMansion, img.completedVilla, img.luxuryHouse],
    features: ["Strong rental yield", "Multiple shops and offices", "Main road frontage", "Verified ownership documents"],
    description:
      "A complete commercial building in Sukkur city for serious investors. Multiple rented units with a strong monthly income stream.",
  },
];
