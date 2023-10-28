import React from 'react';
import '../style.css'
import {motion} from 'framer-motion'
const Results = ({ data }) => {
  return (
    <motion.form 
    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      className="form-data"
      >
    <div>
      <p>Age: {data.age}</p>
      <p>Nationality: {data.nationality}</p>
      <p>Gender: {data.gender}</p>
    </div>
    </motion.form>
  );
};

export default Results;
