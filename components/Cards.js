import react from "react";
import { mad } from "../mad";
import Link from "next/link";
import { useState } from "react";

export default function Card() {
  const [data, setData] = useState();
  function setIt(e) {
    setData()

  }
  return (
    <div>
      <div>
        {mad.map(e => {
          return (
            <div>
              <h2>{"MadLib # " + `${e.index}`}</h2>
              <p>{"This one has " + `${e.adlibs}` + " madLibs to add!"}</p>
              <p>{"They are" + " " + `${e.words}`}</p>
              {/* <Link  href={{pathname: "/MadLibs"}} >Home</Link> */}
              <button onClick={setIt(e)}>Go</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
