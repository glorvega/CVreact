import "./Box.scss";
import React, { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Education from "./Education";
import Experience from "./Experience";
import { CV } from "./../CV/CV";

const Box = () => {
    function Item(props) {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleOpen = () => setIsOpen(!isOpen);
      
        return (
          <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            <h1>{props.CvElement}</h1>
            <AnimatePresence>{isOpen && <Content component={props.CvElement}/>}</AnimatePresence>
          </motion.li>
        );
      }

      
      function Content(props) {
        const {
            education, experience, /* languages, habilities, volunteer */
          } = CV;

        return (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
          
          {props.component === 'education' ? <Education education={education}/> : <Experience experience={experience}/>}
            
          </motion.div>
        );
      }

      const items  = ['education', 'experience']
      
  return (
    <AnimateSharedLayout>
      <motion.ul layout initial={{ borderRadius: 25 }}>
      {items.map(item => (
          <Item CvElement={item} />
        ))}
        
        
      </motion.ul>
    </AnimateSharedLayout>
  )
}

export default Box