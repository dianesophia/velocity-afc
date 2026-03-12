import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const letterVariants = {
    hidden: { y: 80, opacity: 0, rotateX: -40 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { delay: 0.6 + i * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
  };

  const title = "BORN";
  const title2 = "TO ";

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax background */}
      <motion.div
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ scale: imgScale, y: imgY }}
        className="absolute inset-0"
      >
        <img src={heroCar} alt="Luxury sports car in dramatic lighting" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </motion.div>

      {/* Animated light sweep */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "200%", opacity: [0, 0.3, 0] }}
        transition={{ delay: 1.5, duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-x-12 pointer-events-none"
      />

      {/* Animated grid lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`vline-${i}`}
            className="absolute top-0 bottom-0 w-px bg-border/10"
            style={{ left: `${20 + i * 15}%` }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ delay: 2 + i * 0.2, duration: 1.5, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative container mx-auto px-6 pt-24">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4"
          >
            The Future of Performance
          </motion.p>

          <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.9] tracking-tight text-foreground mb-6 perspective-[800px]">
            <span className="block overflow-hidden">
              {title.split("").map((char, i) => (
                <motion.span key={i} custom={i} variants={letterVariants} initial="hidden" animate="visible" className="inline-block">
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden">
              {title2.split("").map((char, i) => (
                <motion.span key={i} custom={i + title.length} variants={letterVariants} initial="hidden" animate="visible" className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-gradient-gold inline-block"
              >
                DOMINATE
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
            className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed"
          >
            Where raw power meets surgical precision. Experience automotive excellence engineered without compromise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7 }}
            className="flex gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(42 100% 50% / 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-gold px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-wider text-primary-foreground glow-gold"
            >
              Explore Models
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "hsl(42 100% 50% / 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="border border-border px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-wider text-foreground transition-colors"
            >
              Watch Film
            </motion.button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex gap-12 mt-20 md:mt-32"
        >
          {[
            { value: "3.2s", label: "0–100 km/h" },
            { value: "720", label: "Horsepower" },
            { value: "340", label: "Top Speed km/h" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + i * 0.15, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.05, transition: { duration: 0.2 } }}
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-border/60 flex items-start justify-center pt-1.5"
        >
          <motion.div className="w-1 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
