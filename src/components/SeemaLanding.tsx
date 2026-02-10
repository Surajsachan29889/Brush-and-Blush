"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Phone,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Instagram,
  Facebook,
  Menu,
  X,
  ChevronRight,
  Scissors,
  Palette,
  Smile,
  Calendar,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
    aria-hidden
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WHATSAPP_URL =
  "https://wa.me/916387871816?text=Hi%20Seema,%20I%20would%20like%20to%20book%20an%20appointment.";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav py-3 shadow-sm" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center gap-2">
          <div className="flex flex-col z-50 min-w-0 flex-shrink-0">
            <span
              className={`font-cursive text-2xl sm:text-3xl md:text-4xl leading-tight ${
                isScrolled ? "text-rose-900" : "text-stone-900"
              }`}
            >
              Seema&apos;s
            </span>
            <span
              className={`text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium ${
                isScrolled ? "text-rose-700" : "text-stone-600"
              }`}
            >
              Brush & Blush
            </span>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            {["Services", "Gallery", "About", "Reviews"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`text-sm font-medium hover:text-rose-500 transition ${
                  isScrolled ? "text-stone-600" : "text-stone-700"
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="bg-rose-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-rose-800 transition shadow-lg"
            >
              Book Now
            </button>
          </div>

          <button
            className="md:hidden z-50 p-2 text-stone-800 bg-white/80 rounded-full border border-stone-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {["Services", "Gallery", "About", "Reviews", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-2xl font-serif font-bold text-stone-800"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  return (
    <header className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden bg-stone-50">
      {/* Blob shapes - smaller on mobile */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-0 left-0 -ml-16 -mt-16 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

      <div className="container mx-auto text-center relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-2.5 sm:px-3 rounded-full bg-rose-100 text-rose-800 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">
            Home Service in Kanpur
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-stone-900 mb-4 sm:mb-6 leading-tight">
            Luxury Salon <br />
            <span className="italic text-rose-700">at your doorstep.</span>
          </h1>
          <p className="text-base sm:text-lg text-stone-600 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed px-1">
            Experience professional makeup, hair styling, and spa services in
            the comfort of your home. Safety, hygiene, and elegance guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-stone-900 text-white rounded-full font-semibold hover:bg-stone-700 transition text-sm sm:text-base"
            >
              View Services
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 sm:px-8 py-2.5 sm:py-3 border border-stone-300 bg-white text-stone-800 rounded-full font-semibold hover:bg-stone-50 transition flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Calendar size={18} className="flex-shrink-0" /> Check Availability
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-2.5 sm:py-3 border border-stone-300 bg-white text-stone-800 rounded-full font-semibold hover:bg-stone-50 transition flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <WhatsAppIcon size={18} className="text-green-600 flex-shrink-0" /> WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

const TrustSection = () => {
  const items = [
    {
      icon: ShieldCheck,
      title: "100% Hygienic",
      desc: "Disposable sheets, towels, and sanitized tools for every client.",
    },
    {
      icon: Sparkles,
      title: "Premium Brands",
      desc: "Only authentic products like MAC, Huda Beauty, Kryolan & O3+.",
    },
    {
      icon: MapPin,
      title: "Home Service",
      desc: "Serving Swaroop Nagar, Kakadeo, Civil Lines & nearby areas.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 border-y border-stone-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-4 sm:p-6"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-rose-600">
                  <Icon size={22} className="sm:w-6 sm:h-6 w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 text-stone-900">
                  {item.title}
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm max-w-xs mx-auto">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ABOUT_IMAGE = "https://picsum.photos/id/25/800/1000";
const ABOUT_BG = "https://picsum.photos/id/26/2000/1200";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-14 sm:py-20 bg-stone-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={ABOUT_BG}
          alt=""
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 w-full max-w-md md:max-w-none mx-auto"
        >
          <div className="aspect-[4/5] bg-stone-800 rounded-lg overflow-hidden relative">
            <Image
              src={ABOUT_IMAGE}
              alt="Makeup & beauty"
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
              <p className="text-white font-serif text-xl">Seema</p>
              <p className="text-stone-300 text-sm">Lead Artist & Founder</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 w-full text-left"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
            More than just makeup,
            <br />
            it&apos;s about confidence.
          </h2>
          <p className="text-stone-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
            With over 5 years of experience in the beauty industry, I started{" "}
            <strong className="text-white">Seema&apos;s Brush & Blush</strong>{" "}
            with a simple mission: to bring the luxury and safety of a high-end
            salon to your living room.
          </p>
          <p className="text-stone-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
            I understand the hygiene concerns women have today. That&apos;s why
            I bring my own disposable kits, sanitized tools, and a promise of
            safety.
          </p>
          <div className="flex gap-3 sm:gap-4 flex-wrap">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="border border-stone-700 p-3 sm:p-4 rounded-lg text-center min-w-[80px] sm:min-w-[100px]"
            >
              <span className="block text-xl sm:text-2xl font-bold text-rose-400">5+</span>
              <span className="text-[10px] sm:text-xs text-stone-400 uppercase">
                Years Exp
              </span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="border border-stone-700 p-3 sm:p-4 rounded-lg text-center min-w-[80px] sm:min-w-[100px]"
            >
              <span className="block text-xl sm:text-2xl font-bold text-rose-400">
                500+
              </span>
              <span className="text-[10px] sm:text-xs text-stone-400 uppercase">
                Happy Clients
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("makeup");

  const categories = [
    { id: "makeup", label: "Makeup", icon: Palette },
    { id: "hair", label: "Hair", icon: Scissors },
    { id: "salon", label: "Spa & Care", icon: Smile },
  ];

  const servicesData: Record<
    string,
    Array<{ name: string; price: string; desc: string }>
  > = {
    makeup: [
      {
        name: "Party Makeup (Light)",
        price: "₹1,500 - ₹2,500",
        desc: "Natural, glowing look. Perfect for guests.",
      },
      {
        name: "Party Makeup (Glam)",
        price: "₹2,500 - ₹3,500",
        desc: "Heavy contour, glitter eyes, lashes included.",
      },
      {
        name: "Engagement / Sagan",
        price: "₹5,000 - ₹7,000",
        desc: "HD Makeup, premium lashes, hairstyling included.",
      },
      {
        name: "Bridal Makeup",
        price: "₹10,000+",
        desc: "Premium HD/Airbrush. Includes trial & jewelry setting.",
      },
    ],
    hair: [
      {
        name: "Blow Dry / Straight",
        price: "₹400 - ₹800",
        desc: "Sleek, frizz-free finish using heat protection.",
      },
      {
        name: "Curls / Waves",
        price: "₹600 - ₹1,000",
        desc: "Soft beach waves or bouncy party curls.",
      },
      {
        name: "Advanced Updo",
        price: "₹800 - ₹1,500",
        desc: "Messy bun, floral buns, or traditional braids.",
      },
    ],
    salon: [
      {
        name: "Premium Facials",
        price: "₹1,200 - ₹3,000",
        desc: "O3+, Lotus, and D-Tan treatments for instant glow.",
      },
      {
        name: "Waxing (Full Body)",
        price: "₹800 - ₹1,500",
        desc: "Rica / Chocolate wax for smooth, painless skin.",
      },
      {
        name: "Threading",
        price: "₹50 - ₹100",
        desc: "Eyebrows, upper lip, chin.",
      },
    ],
  };

  return (
    <section id="services" className="py-14 sm:py-20 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-2 sm:mb-4"
          >
            Service Menu
          </motion.h2>
          <p className="text-stone-500 text-sm sm:text-base">Transparent pricing. No hidden charges.</p>
        </div>

        <div className="flex justify-center mb-8 sm:mb-10 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="bg-white p-1 rounded-full shadow-sm border border-stone-200 inline-flex gap-1 flex-shrink-0">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                    activeTab === cat.id
                      ? "bg-rose-900 text-white shadow-md"
                      : "text-stone-500 hover:text-stone-800"
                  }`}
                >
                  <Icon size={14} className="sm:w-4 sm:h-4 w-3.5 h-3.5 flex-shrink-0" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="contents"
            >
              {servicesData[activeTab].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition flex flex-col justify-between"
                >
                  <div className="flex justify-between items-start gap-2 mb-1.5 sm:mb-2">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-stone-800 min-w-0">
                      {item.name}
                    </h3>
                    <span className="font-bold text-rose-700 bg-rose-50 px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm flex-shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-stone-500 text-xs sm:text-sm mb-3 sm:mb-4">{item.desc}</p>
                  <button className="text-left text-xs font-semibold text-rose-600 uppercase tracking-wider flex items-center gap-1 group">
                    Book this{" "}
                    <ChevronRight
                      size={14}
                      className="group-hover:translate-x-1 transition"
                    />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          whileHover={{ y: -2 }}
          className="mt-8 sm:mt-12 max-w-2xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl border border-rose-200/80 bg-gradient-to-br from-rose-50/90 via-white to-stone-50/90 shadow-lg shadow-rose-900/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/20 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-rose-100/30 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative px-5 sm:px-8 py-5 sm:py-6">
              <div className="flex flex-wrap items-center justify-center gap-2 mb-3 sm:mb-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-rose-100 px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-rose-800">
                  Best value
                </span>
                <span className="text-stone-400">·</span>
                <span className="text-xs sm:text-sm text-stone-500 font-medium">
                  Save ₹500
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 text-center mb-3 sm:mb-4">
                Special Combo Offer
              </h3>
              <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm sm:text-base text-stone-600 mb-4 sm:mb-5">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  Party Makeup
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  Hair Styling
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  Saree Draping
                </li>
              </ul>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-rose-700 tracking-tight">
                  ₹3,500
                </span>
                <span className="text-base sm:text-lg text-stone-400 line-through">
                  ₹4,000
                </span>
              </div>
              <p className="text-xs text-stone-500 text-center mt-3 sm:mt-4">
                All three services in one booking · Transparent pricing
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const GALLERY_ROW1 = [
  "https://picsum.photos/id/10/800/600",
  "https://picsum.photos/id/20/800/600",
  "https://picsum.photos/id/30/800/600",
  "https://picsum.photos/id/40/800/600",
  "https://picsum.photos/id/15/800/600",
  "https://picsum.photos/id/25/800/600",
];

const GALLERY_ROW2 = [
  "https://picsum.photos/id/11/800/600",
  "https://picsum.photos/id/21/800/600",
  "https://picsum.photos/id/31/800/600",
  "https://picsum.photos/id/41/800/600",
  "https://picsum.photos/id/16/800/600",
  "https://picsum.photos/id/26/800/600",
];

const GalleryCard = ({
  src,
  index,
  row,
}: {
  src: string;
  index: number;
  row: number;
}) => (
  <div
    className="relative flex-shrink-0 w-[220px] sm:w-[260px] md:w-[380px] h-[280px] sm:h-[340px] md:h-[420px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg group border border-stone-100"
    style={{ scrollSnapAlign: "start" }}
  >
    <Image
      src={src}
      alt={`Gallery ${row} ${index + 1}`}
      fill
      className="object-cover transition duration-700 group-hover:scale-110"
      sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, 380px"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 sm:p-6">
      <p className="text-white font-serif text-sm sm:text-lg">Look #{index + 1}</p>
    </div>
  </div>
);

const Gallery = () => {
  const trackLeft = [...GALLERY_ROW1, ...GALLERY_ROW1];
  const trackRight = [...GALLERY_ROW2, ...GALLERY_ROW2];

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-2 sm:mb-4">
          Latest Work
        </h2>
        <p className="text-stone-500 text-sm sm:text-base">Real brides, real shine. No filters.</p>
      </div>

      {/* Carousel 1: scrolls left */}
      <div className="carousel-side-shade overflow-hidden py-3 sm:py-4">
        <div className="carousel-track carousel-track--left flex gap-4 sm:gap-6 w-max">
          {trackLeft.map((src, i) => (
            <GalleryCard
              key={`left-${i}`}
              src={src}
              index={i % GALLERY_ROW1.length}
              row={1}
            />
          ))}
        </div>
      </div>

      {/* Carousel 2: scrolls right */}
      <div className="carousel-side-shade overflow-hidden py-3 sm:py-4">
        <div className="carousel-track carousel-track--right flex gap-4 sm:gap-6 w-max">
          {trackRight.map((src, i) => (
            <GalleryCard
              key={`right-${i}`}
              src={src}
              index={i % GALLERY_ROW2.length}
              row={2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="reviews" className="py-14 sm:py-20 bg-stone-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <Star
          className="text-yellow-400 mx-auto mb-4 sm:mb-6 fill-current"
          size={28}
        />
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
          Loved by Kanpur
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              name: "Priya S.",
              text: "Seema di is magical! She did my engagement makeup and everyone complimented the natural glow.",
              loc: "Swaroop Nagar",
            },
            {
              name: "Anjali K.",
              text: "Very hygienic. She opened a fresh kit in front of me. Felt very safe compared to other salons.",
              loc: "Civil Lines",
            },
            {
              name: "Riya M.",
              text: "Best hairstyle service at home. Saved me so much time before the wedding.",
              loc: "Kakadeo",
            },
          ].map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-stone-800 p-5 sm:p-8 rounded-xl sm:rounded-2xl relative"
            >
              <div className="text-rose-400 text-5xl sm:text-6xl font-serif absolute top-3 left-3 sm:top-4 sm:left-4 opacity-20">
                &quot;
              </div>
              <p className="text-stone-300 mb-4 sm:mb-6 relative z-10 italic text-sm sm:text-base">
                {review.text}
              </p>
              <div>
                <p className="font-bold text-white text-sm sm:text-base">{review.name}</p>
                <p className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-widest">
                  {review.loc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-white pt-14 sm:pt-20 pb-24 sm:pb-28 md:pb-8 lg:pb-10 border-t border-stone-200"
    >
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-3 sm:mb-4"
        >
          Ready to Glow?
        </motion.h2>
        <p className="text-stone-500 mb-6 sm:mb-8 max-w-md mx-auto text-sm sm:text-base px-1">
          Book your appointment today. Serving all major areas in Kanpur.
        </p>

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-green-700 transition shadow-lg w-full max-w-xs sm:max-w-none sm:w-auto"
        >
          <WhatsAppIcon size={22} className="sm:w-6 sm:h-6 flex-shrink-0" /> Chat on WhatsApp
        </motion.a>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-stone-400">
          <p className="text-center md:text-left">© {new Date().getFullYear()} Seema&apos;s Brush & Blush. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-rose-600 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-rose-600 transition">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function SeemaLanding() {
  return (
    <div className="bg-stone-50 min-h-screen font-sans selection:bg-rose-200 selection:text-rose-900">
      <Navbar />
      <Hero />
      <TrustSection />
      <Services />
      <Gallery />
      <AboutSection />
      <Testimonials />
      <Footer />

      <div className="fixed bottom-0 left-0 right-0 w-full p-3 sm:p-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur-md border-t border-stone-200 md:hidden z-40 flex gap-2 sm:gap-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-0 bg-green-500 text-white py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base text-center flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg"
        >
          <WhatsAppIcon size={18} className="sm:w-5 sm:h-5 flex-shrink-0" /> WhatsApp
        </a>
        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex-1 min-w-0 bg-stone-900 text-white py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base text-center shadow-lg"
        >
          Call Now
        </button>
      </div>

      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 items-center gap-2 group hover:pr-6 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={28} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">
          Chat with Seema
        </span>
      </motion.a>
    </div>
  );
}
