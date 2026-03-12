import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="border-t border-border py-12"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-display text-xl font-bold tracking-tight text-foreground"
        >
          VELO<span className="text-gradient-gold">X</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex gap-8"
        >
          {["Privacy", "Terms", "Support"].map((link, i) => (
            <motion.a
              key={link}
              href="#"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
              whileHover={{ y: -2, color: "hsl(42 100% 50%)" }}
              className="text-sm text-muted-foreground transition-colors"
            >
              {link}
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm text-muted-foreground"
        >
          © 2026 Velox Motors. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
