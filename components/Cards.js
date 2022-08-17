import react from "react";
import { useState, useEffect, useContext } from "react";
import styles from '../styles/card_styles.module.css';
import Mad from './Mad.js'
import {MadContext} from './Context/MadContext';

export default function Card() {
  // console.log(MyContext)
 const { mad, madLibs, setMadLibs } = useContext(MadContext);


  function setIt(e) {
    props.setMadLibs(e)
  }

  useEffect(() => {
   console.log("setIt called")
   return () => {
     console.log("Cleaned up bro!") 
   };
  }, []);
  
  return (
    <div>
      <div className={styles.cardContainer}>
        {mad.map((madL) => {
          return(
            <MadContext.Provider value={{mad, madLibs, setMadLibs, madL}}>
              <Mad madL={madL} setMadLibs={setMadLibs} />
            </MadContext.Provider>
          )
        })}
     
      </div>
    </div>
  );
}
