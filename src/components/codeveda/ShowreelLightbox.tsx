import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

type Props = { open: boolean; onClose: () => void; src: string };

export function ShowreelLightbox({ open, onClose, src }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 rounded-full border border-border bg-background/60 flex items-center justify-center hover:bg-secondary transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl bg-black"
          >
            <video
              src={src}
              autoPlay
              controls
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}