import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
};

const word: Variants = {
  hidden: { y: "110%", opacity: 0, filter: "blur(8px)" },
  show: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export function AnimatedText({
  text,
  className,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  as?: React.ElementType;
}) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      <motion.span
        className="inline"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom pr-[0.25em]">
            <motion.span variants={word} className="inline-block">
              {w}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}