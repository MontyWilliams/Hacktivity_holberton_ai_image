import Link from "next/link";
import React, { useContext, useEffect} from 'react';
import { MadContext } from './Context/MadContext.js'



const Mad = (props) => { 
  const {madLibs, setMadLibs, madL} = useContext(MadContext);
  
  useEffect(() => {
    function setIt(madL) {
      setMadLibs(madL)
    }
   
  }, );

  return (
    <div>
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
