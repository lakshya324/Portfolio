import { motion } from "framer-motion";

// Variants
const stairsAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

// calculate the delay for each step based on it's reverse index
const totalSteps = 6; // 6 is the total number of steps/stairs
const ReverseIndex = (index) => {
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/*
        Render 6 motion divs, each representing a step of the stairs.
        Each div will have the same animation defined by the stairsAnimation object.
        The delay for each div is calculated dynamically based on it's reverse index.
        Creating a stagger effect with decreasing delay for each subsequent step.
    */}
      {[...Array(totalSteps)].map((_, index) => {
        return <motion.div
          key={index}
          variants={stairsAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: ReverseIndex(index) * 0.05,
          }}
          className="h-full w-full bg-white relative"
        />;
      })}
    </>
  );
};

export default Stairs;
