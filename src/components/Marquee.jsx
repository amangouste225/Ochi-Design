import { motion } from "framer-motion";

export default function Marquee() {
  const marquee = {
    animate: {
      x: "-100%",
      transition: {
        x: {
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="w-full h-[60vh] bg-[#004D43] rounded-[3rem] py-16">
      <div className="overflow-hidden flex gap-20 border-t-[1px] border-b-[1px] border-zinc-100 pb-6 whitespace-nowrap font-grotesk uppercase">
        <motion.h1
          variants={marquee}
          animate="animate"
          className="text-[20vw] leading-none h-full"
        >
          we are aside
        </motion.h1>
        <motion.h1
          variants={marquee}
          animate="animate"
          className="text-[20vw] leading-none h-full"
        >
          we are studio
        </motion.h1>
      </div>
    </div>
  );
}
