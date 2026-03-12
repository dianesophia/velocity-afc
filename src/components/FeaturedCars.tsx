import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import carFeatured1 from "@/assets/car-featured-1.jpg";
import carFeatured2 from "@/assets/car-featured-2.jpg";
import carFeatured3 from "@/assets/car-featured-3.jpg";

const cars = [
  {
    name: "Phantom GT",
    category: "Grand Tourer",
    power: "620 HP",
    image: carFeatured1,
  },
  {
    name: "Inferno RS",
    category: "Supercar",
    power: "780 HP",
    image: carFeatured2,
  },
  {
    name: "Spectre X",
    category: "Hypercar",
    power: "1,020 HP",
    image: carFeatured3,
  },
];

const CarCard = ({ car, index }: { car: typeof cars[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-lg card-shadow hover-lift"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-primary mb-1">
          {car.category}
        </p>
        <h3 className="font-display text-2xl font-bold text-foreground mb-1">
          {car.name}
        </h3>
        <p className="text-sm text-muted-foreground">{car.power}</p>

        <div className="mt-4 flex items-center gap-2 text-sm text-primary opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="uppercase tracking-wider font-medium">Discover</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedCars = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-50px" });

  return (
    <section id="models" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
            The Lineup
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Choose Your <span className="text-gradient-gold">Weapon</span>
          </h2>
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
