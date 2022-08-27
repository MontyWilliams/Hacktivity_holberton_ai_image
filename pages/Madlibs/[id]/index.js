import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { MadContext } from "../../../components/Context/MadContext";
import styles from "../../../styles/madIndex_styles.module.css";


function getIt(props) {
  for (const key in props) {
    let page = Object.values(props);  
    return (
      <div className={styles.h1}>
        {page.map(e => {
          // setData(data)
          return (
            <div>
              <h1 key={e} className={styles.box}>
                {e}
                <form>
                  <input
                    type="text"
                    name={key}
                    style={{ width: "100px" }}
                    onChange={handleChange}
                  />
                </form>
              </h1>
            </div>
          );
        })}
      </div>
    );
  }
}

function handleChange(event) {
  console.log(event);
}


const madL = () => {
  const { madLibs, setMadLibs } = useContext(MadContext);
  const word = madLibs.wordsAnswer;
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({})
 
useEffect(() => {
  let wordArr = new Set();
  for(let key in word) {
    wordArr.add({[word[key]]: ""})
  }
  setData(e => ({
    ...Array.from(wordArr)
  } ))
}, );

console.log(data);
  return (
    <div>
      <p>
        Succesfully got The routes Working! this is route: "{id}"
      </p>
      <p className={styles.madText}>
        {madLibs.description}
      </p>
      {/* <button onClick={getIt} >yes</button> */}
      <div>
        {getIt(word)}
      </div>
    </div>
  );
};

export default madL;
