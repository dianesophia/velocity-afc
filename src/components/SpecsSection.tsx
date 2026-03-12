import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Gauge, Wind, Shield } from "lucide-react";

const specs = [
  { icon: Zap, title: "Electric Hybrid", description: "Instant torque delivery with seamless power transitions between electric and combustion modes.", value: "1,020", unit: "HP Combined" },
  { icon: Gauge, title: "Track Precision", description: "Advanced telemetry and active aero dynamics for surgical cornering at any speed.", value: "2.8s", unit: "0–100 km/h" },
  { icon: Wind, title: "Aerodynamic Design", description: "Every curve engineered for minimal drag and maximum downforce at high velocity.", value: "350+", unit: "kg Downforce" },
  { icon: Shield, title: "Carbon Architecture", description: "Monocoque chassis built from aerospace-grade carbon fiber for ultimate rigidity.", value: "1,280", unit: "kg Dry Weight" },
];

const SpecCard = ({ spec, index, inView }: { spec: (typeof specs)[0]; index: number; inView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 60px hsl(42 100% 50% / 0.1)",
        borderColor: "hsl(42 100% 50% / 0.3)",
        transition: { duration: 0.3 },
      }}
      className="glass-panel rounded-lg p-6 group cursor-default relative overflow-hidden"
    >
      {/* Background glow on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(circle at 50% 0%, hsl(42 100% 50% / 0.06), transparent 70%)" }}
      />

      <div className="relative">
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ delay: index * 0.15 + 0.3, duration: 0.5, type: "spring", stiffness: 200 }}
        >
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
          >
            <spec.icon className="text-primary mb-4 group-hover:drop-shadow-[0_0_8px_hsl(42_100%_50%/0.5)] transition-all duration-300" size={28} strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: -15 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
          className="font-display text-3xl font-bold text-foreground mb-0"
        >
          {spec.value}
        </motion.p>
        <p className="text-xs uppercase tracking-widest text-primary mb-4">{spec.unit}</p>

        <h3 className="font-display text-lg font-semibold text-foreground mb-2">{spec.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{spec.description}</p>

        <motion.div
          className="h-px bg-primary mt-5 origin-left"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.6, duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const SpecsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="performance" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/20"
          style={{ left: `${10 + i * 11}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{
            y: [0, -40, 0],
            x: [0, (i % 2 === 0 ? 15 : -15), 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      <div className="container mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={inView ? { opacity: 1, letterSpacing: "0.3em" } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs uppercase text-primary mb-3"
          >
            Engineering
          </motion.p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Beyond <span className="text-gradient-gold">Limits</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-24 bg-primary mx-auto mt-6 origin-center"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, i) => (
            <SpecCard key={spec.title} spec={spec} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
