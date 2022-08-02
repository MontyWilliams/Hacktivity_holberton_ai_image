import react from 'react'
import {  mad } from '../mad'


export default function Card() {

  return(
    <div>
      
    {mad.map((e) => {
      return (
        <div>
           <h2>{"MadLib # " +`${e.index}`}</h2>
            <p>{"This one has " +`${e.adlibs}` + " madLibs to add!"}</p>
            <p>{"They are" + " " + `${e.words}`}</p>
           
            
        </div>
      )
    })}
   </div>

)
}
