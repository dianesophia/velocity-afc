import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import carFeatured1 from "@/assets/car-featured-1.jpg";
import carFeatured2 from "@/assets/car-featured-2.jpg";
import carFeatured3 from "@/assets/car-featured-3.jpg";

const cars = [
  { name: "Phantom GT", category: "Grand Tourer", power: "620 HP", image: carFeatured1 },
  { name: "Inferno RS", category: "Supercar", power: "780 HP", image: carFeatured2 },
  { name: "Spectre X", category: "Hypercar", power: "1,020 HP", image: carFeatured3 },
];

const CarCard = ({ car, index }: { car: (typeof cars)[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, rotateY: -8 }}
      animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -12, rotateY: 2, transition: { duration: 0.4, ease: "easeOut" } }}
      className="group relative overflow-hidden rounded-lg card-shadow cursor-pointer"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <motion.img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <motion.div
          className="absolute inset-0 bg-primary/5"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: "2rem" } : {}}
          transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
          className="h-px bg-primary mb-4"
        />
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
          className="text-xs uppercase tracking-[0.2em] text-primary mb-1"
        >
          {car.category}
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
          className="font-display text-2xl font-bold text-foreground mb-1"
        >
          {car.name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.6, duration: 0.5 }}
          className="text-sm text-muted-foreground"
        >
          {car.power}
        </motion.p>

        <div className="mt-4 flex items-center gap-2 text-sm text-primary opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="uppercase tracking-wider font-medium">Discover</span>
          <motion.span className="inline-block" whileHover={{ x: 4 }}>
            <ArrowRight size={14} />
          </motion.span>
        </div>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-foreground/5 to-transparent rotate-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      </div>
    </motion.div>
  );
};

const FeaturedCars = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-50px" });

  return (
    <section id="models" className="py-32 relative">
      {/* Animated background accent */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={headingInView ? { opacity: 1, letterSpacing: "0.3em" } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs uppercase text-primary mb-3"
          >
            The Lineup
          </motion.p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Choose Your <span className="text-gradient-gold">Weapon</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headingInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-24 bg-primary mx-auto mt-6 origin-left"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cars.map((car, i) => (
            <CarCard key={car.name} car={car} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
