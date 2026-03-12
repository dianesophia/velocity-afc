import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-2xl font-bold tracking-tight text-foreground">
          VELO<span className="text-gradient-gold">X</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Models", "Performance", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="line-accent text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground pb-1"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="bg-gradient-gold px-6 py-2 rounded-sm text-sm font-semibold uppercase tracking-wider text-primary-foreground hidden md:block hover:opacity-90 transition-opacity"
        >
          Configure
        </button>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          <Menu size={24} />
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-border px-6 pb-6"
        >
          {["Models", "Performance", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-3 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
