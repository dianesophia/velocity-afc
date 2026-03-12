import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Gauge, Wind, Shield } from "lucide-react";

const specs = [
  {
    icon: Zap,
    title: "Electric Hybrid",
    description: "Instant torque delivery with seamless power transitions between electric and combustion modes.",
    value: "1,020",
    unit: "HP Combined",
  },
  {
    icon: Gauge,
    title: "Track Precision",
    description: "Advanced telemetry and active aero dynamics for surgical cornering at any speed.",
    value: "2.8s",
    unit: "0–100 km/h",
  },
  {
    icon: Wind,
    title: "Aerodynamic Design",
    description: "Every curve engineered for minimal drag and maximum downforce at high velocity.",
    value: "350+",
    unit: "kg Downforce",
  },
  {
    icon: Shield,
    title: "Carbon Architecture",
    description: "Monocoque chassis built from aerospace-grade carbon fiber for ultimate rigidity.",
    value: "1,280",
    unit: "kg Dry Weight",
  },
];

const SpecsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="performance" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
            Engineering
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Beyond <span className="text-gradient-gold">Limits</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-panel rounded-lg p-6 hover-lift group"
            >
              <spec.icon className="text-primary mb-4" size={28} strokeWidth={1.5} />
              
              <p className="font-display text-3xl font-bold text-foreground mb-0">
                {spec.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-primary mb-4">
                {spec.unit}
              </p>

              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {spec.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {spec.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
