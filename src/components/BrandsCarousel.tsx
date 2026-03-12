import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import brandLamborghini from "@/assets/brand-lamborghini.png";
import brandFerrari from "@/assets/brand-ferrari.png";
import brandPorsche from "@/assets/brand-porsche.png";
import brandMclaren from "@/assets/brand-mclaren.png";
import brandAstonMartin from "@/assets/brand-aston-martin.png";
import brandBugatti from "@/assets/brand-bugatti.png";
import brandBentley from "@/assets/brand-bentley.png";
import brandRollsRoyce from "@/assets/brand-rolls-royce.png";
import brandMaserati from "@/assets/brand-maserati.png";
import brandPagani from "@/assets/brand-pagani.png";

const brands = [
  { name: "Lamborghini", logo: brandLamborghini },
  { name: "Ferrari", logo: brandFerrari },
  { name: "Porsche", logo: brandPorsche },
  { name: "McLaren", logo: brandMclaren },
  { name: "Aston Martin", logo: brandAstonMartin },
  { name: "Bugatti", logo: brandBugatti },
  { name: "Bentley", logo: brandBentley },
  { name: "Rolls-Royce", logo: brandRollsRoyce },
  { name: "Maserati", logo: brandMaserati },
  { name: "Pagani", logo: brandPagani },
];

const BrandsCarousel = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 border-t border-border/30 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={inView ? { opacity: 1, letterSpacing: "0.3em" } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs uppercase text-primary mb-3"
          >
            Partners
          </motion.p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            World-Class <span className="text-gradient-gold">Brands</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-24 bg-primary mx-auto mt-6 origin-center"
          />
        </motion.div>
      </div>

      {/* Row 1 - left to right */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((brand, i) => (
            <motion.div
              key={`${brand.name}-${i}`}
              whileHover={{ scale: 1.08, borderColor: "hsl(42 100% 50% / 0.4)" }}
              className="mx-6 flex-shrink-0 glass-panel px-6 py-4 rounded-lg flex items-center gap-4 transition-colors duration-300 cursor-default"
            >
              <img src={brand.logo} alt={brand.name} className="h-10 w-10 object-contain" />
              <span className="font-display text-base md:text-lg font-semibold text-foreground/70">{brand.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Row 2 - right to left */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...brands.slice().reverse(), ...brands.slice().reverse()].map((brand, i) => (
            <motion.div
              key={`rev-${brand.name}-${i}`}
              whileHover={{ scale: 1.08, borderColor: "hsl(42 100% 50% / 0.4)" }}
              className="mx-6 flex-shrink-0 glass-panel px-6 py-4 rounded-lg flex items-center gap-4 transition-colors duration-300 cursor-default"
            >
              <img src={brand.logo} alt={brand.name} className="h-10 w-10 object-contain" />
              <span className="font-display text-base md:text-lg font-semibold text-foreground/70">{brand.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
