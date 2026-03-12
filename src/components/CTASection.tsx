import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-lg overflow-hidden glass-panel p-12 md:p-20 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

          {/* Animated corner accents */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-0 left-0 w-20 h-px bg-primary origin-left"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-0 left-0 w-px h-20 bg-primary origin-top"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-0 right-0 w-20 h-px bg-primary origin-right"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-0 right-0 w-px h-20 bg-primary origin-bottom"
          />

          {/* Pulsing glow background */}
          <motion.div
            animate={{ opacity: [0.03, 0.08, 0.03], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-radial-gradient from-primary/10 to-transparent pointer-events-none"
            style={{ background: "radial-gradient(circle at center, hsl(42 100% 50% / 0.08), transparent 70%)" }}
          />

          <div className="relative">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-primary mb-4"
            >
              Limited Production
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              Ready to <span className="text-gradient-gold">Own</span> the Road?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed"
            >
              Only 250 units will ever be produced. Reserve your place in automotive history today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(42 100% 50% / 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-gold px-10 py-4 rounded-sm text-sm font-bold uppercase tracking-wider text-primary-foreground glow-gold inline-flex items-center gap-2 justify-center"
              >
                Reserve Now
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight size={16} />
                </motion.span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "hsl(42 100% 50% / 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="border border-border px-10 py-4 rounded-sm text-sm font-bold uppercase tracking-wider text-foreground transition-colors"
              >
                Book Test Drive
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
