import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-lg overflow-hidden glass-panel p-12 md:p-20 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Limited Production
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Ready to <span className="text-gradient-gold">Own</span> the Road?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
              Only 250 units will ever be produced. Reserve your place in 
              automotive history today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-gold px-10 py-4 rounded-sm text-sm font-bold uppercase tracking-wider text-primary-foreground hover:opacity-90 transition-opacity glow-gold inline-flex items-center gap-2 justify-center">
                Reserve Now
                <ArrowRight size={16} />
              </button>
              <button className="border border-border px-10 py-4 rounded-sm text-sm font-bold uppercase tracking-wider text-foreground hover:border-primary/50 transition-colors">
                Book Test Drive
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
