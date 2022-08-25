import Link from "next/link";
import React, { useContext, useEffect, useState} from 'react';
import { MadContext } from './Context/MadContext.js'
import styles  from '../styles/mad_styles.module.css'



const Mad = (props) => { 
  const {madLibs, setMadLibs, madL} = useContext(MadContext);
  const [madId, setMadId] = useState(false)
  
  
  useEffect(() => {
    function setIt(madL) {
      setMadLibs(madL)

    }
   
  }, );



  const bgSwitch = {
    backgroundColor: "white"
   
}

  return (
    <div className={styles.Hero} style={bgSwitch}>
    <h2 >{"MadLib # " + `${madL.id}`}</h2>
    <p>{"This one has " + `${madL.adlibs}` + " madLibs to add!"}</p>
    <p>{"They are" + " " + `${madL.words}`}</p>
    {/* <p>{"This is for the next page" + " " + `${JSON.stringify(madL.wordsAnswer)}`}</p> */}
    
    <button onClick={(() => setMadLibs(madL))}>
    <Link  href="/Madlibs/[id]" as={`/Madlibs/${madL.id}`}>Go to MadLib</Link>
    </button>
  </div>
  )

}
export default Mad;
