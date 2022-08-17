import Link from "next/link";
import React, { useContext } from 'react';
import {MadContext} from './Context/MadContext';


const Mad = (props) => { 
//  const { madLibs } = useContext(MadContext);
  const  it  = props.setMadLibs
  const {id, description, adlibs, words, wordsAnswer, madL} = props.madL
  function setIt(madL) {
    props.setMadLibs(madL)
    
  }
  
  // console.log(props)
  return (
    <div>
    <h2 >{"MadLib # " + `${id}`}</h2>
    <p>{"This one has " + `${adlibs}` + " madLibs to add!"}</p>
    <p>{"They are" + " " + `${words}`}</p>
    {/* <p>{"This is for the next page" + " " + `${JSON.stringify(wordsAnswer)}`}</p> */}
    <Link  href="/Madlibs/[id.va]" as={`/Madlibs/${id}`}>Home</Link>
    <button onClick={(() => setIt(props.madL))}>Go</button>
  </div>
  )

}
export default Mad;
