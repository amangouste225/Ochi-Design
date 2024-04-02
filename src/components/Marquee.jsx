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
    <div className="w-full max-h-[40rem] bg-[#004D43] rounded-t-[2.5rem] py-20">
      <div className="overflow-hidden border-t-[1px] border-b-[1px] border-zinc-500 pb-14 whitespace-nowrap font-grotesk uppercase">
        <motion.h1
          variants={marquee}
          animate="animate"
          className="text-[28vw] leading-[16vw] h-full select-none text-zinc-200"
        >
          we are aside
        </motion.h1>
      </div>
    </div>
  );
}
