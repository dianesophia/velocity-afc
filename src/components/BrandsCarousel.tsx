import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const brands = [
  "Lamborghini", "Ferrari", "Porsche", "McLaren", "Aston Martin",
  "Bugatti", "Bentley", "Rolls-Royce", "Maserati", "Pagani",
];

const BrandsCarousel = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 border-t border-border/30 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
            Partners
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            World-Class <span className="text-gradient-gold">Brands</span>
          </h2>
        </motion.div>
      </div>

      {/* Infinite scrolling marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="mx-8 flex-shrink-0 glass-panel px-8 py-4 rounded-lg"
            >
              <span className="font-display text-lg md:text-xl font-semibold text-foreground/70 hover:text-primary transition-colors duration-300 cursor-default">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
