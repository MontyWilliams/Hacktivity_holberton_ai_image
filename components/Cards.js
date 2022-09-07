import react from "react";
import { useState, useEffect, useContext } from "react";
import styles from '../styles/card_styles.module.css';
import Mad from './Mad.js'
import {MadContext} from './Context/MadContext';


export default function Card() {
 const { mad, setMadLibs} = useContext(MadContext);


//   function setIt(e) {
//     setMadLibs(e)
//   }



  useEffect(() => {
   console.log("setIt called")
   return () => {
     console.log("Cleaned up bro!") 
   };
  }, []);
  
  return (
    <div>
      <div className={styles.cardContainer} >
        {mad.map((madL) => {
          return(
            <MadContext.Provider value={{mad, madL, setMadLibs}}>
              <Mad  />
            </MadContext.Provider>
          )
        })}
     
      </div>
    </div>
  );
}
