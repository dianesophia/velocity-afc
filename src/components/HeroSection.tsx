import { motion } from "framer-motion";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroCar}
          alt="Luxury sports car in dramatic lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </motion.div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-24">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4"
          >
            The Future of Performance
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-display text-6xl md:text-8xl font-black leading-[0.9] tracking-tight text-foreground mb-6"
          >
            BORN
            <br />
            TO <span className="text-gradient-gold">DOMINATE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed"
          >
            Where raw power meets surgical precision. Experience automotive excellence
            engineered without compromise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex gap-4"
          >
            <button className="bg-gradient-gold px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-wider text-primary-foreground hover:opacity-90 transition-opacity glow-gold">
              Explore Models
            </button>
            <button className="border border-border px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-wider text-foreground hover:border-primary/50 transition-colors">
              Watch Film
            </button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex gap-12 mt-20 md:mt-32"
        >
          {[
            { value: "3.2s", label: "0–100 km/h" },
            { value: "720", label: "Horsepower" },
            { value: "340", label: "Top Speed km/h" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
