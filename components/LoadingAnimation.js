import { motion } from 'framer-motion';
import '../style.css'
const LoadingAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="loader"></div>
    </motion.div>
  );
};

export default LoadingAnimation;
