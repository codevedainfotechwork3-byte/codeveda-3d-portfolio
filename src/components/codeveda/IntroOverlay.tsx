import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function IntroOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("rw-intro-shown")) return;
    setShow(true);
    const t = setTimeout(() => {
      sessionStorage.setItem("rw-intro-shown", "1");
      setShow(false);
    }, 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] bg-background flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0em" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-script text-6xl md:text-8xl text-foreground"
          >
            Reelwale
            <span className="font-display ml-3 text-2xl md:text-3xl tracking-[0.4em] uppercase text-muted-foreground">studio</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}