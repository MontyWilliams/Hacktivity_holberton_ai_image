import react from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from '../styles/card_styles.module.css';


export default function Card(props) {
// console.log(props);
  
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
        {props.mad.map(e => {
        
          return (
            <div>
              <h2 className={styles.cardh1}>{"MadLib # " + `${e.index}`}</h2>
              <p>{"This one has " + `${e.adlibs}` + " madLibs to add!"}</p>
              <p>{"They are" + " " + `${e.words}`}</p>
              {/* <Link  href={{pathname: "/MadLibs"}} >Home</Link> */}
              <button onClick={(() => setIt(e))}>Go</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
