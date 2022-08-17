import Link from "next/link";
import React, { useContext } from 'react';
import { MadContext } from './Context/MadContext.js'

const Mad = (props) => { 
  const {madLibs, setMadLibs, madL} = useContext(MadContext);

  function setIt(madL) {
    setMadLibs(madL)  
  }
  
  return (
    <div>
    <h2 >{"MadLib # " + `${madL.id}`}</h2>
    <p>{"This one has " + `${madL.adlibs}` + " madLibs to add!"}</p>
    <p>{"They are" + " " + `${madL.words}`}</p>
    {/* <p>{"This is for the next page" + " " + `${JSON.stringify(madL.wordsAnswer)}`}</p> */}
    <Link  href="/Madlibs/[id.va]" as={`/Madlibs/${madL.id}`}   >Home</Link>
    <button onClick={(() => setIt(madL))}>Go</button>
  </div>
  )

}
export default Mad;
