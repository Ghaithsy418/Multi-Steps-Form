export const containerMotion = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      type: 'spring',
      stiffness: 120,
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition:{
        duration: 0.4,
    }
  },
};
