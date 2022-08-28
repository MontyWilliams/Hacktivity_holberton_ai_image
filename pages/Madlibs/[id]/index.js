import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { MadContext } from "../../../components/Context/MadContext";
import styles from "../../../styles/madIndex_styles.module.css";


function getIt(props) {
  console.log(props);
  const proper = props.word
  for (const key in proper) {
    let page = Object.values(proper);  
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
                    style={{ width: "20rem" }}
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

function handleChange({event, setData=setData}) {
  setData(prevData => {
    return {
      ...prevData,
      [event.target.name]: event.target.value
    }
  })
  
}

const madL = () => {
  const { madLibs, setMadLibs } = useContext(MadContext);
  const word = madLibs.wordsAnswer;
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({})
  const [isActive, setIsActive] = useState(true);
  
  
  const handleClick = event => {
    setIsActive(false);
    let wordArr = new Set();
    for(let key in word) {
      wordArr.add({[word[key]]: ""})
    }
    setData(e => ({
      ...Array.from(wordArr)
    } ))
    console.log(data)
  };
  
  
  
console.log(data);
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Your Madlib is:
        {/* Succesfully got The routes Working! this is route: "{id}" */}
      </p>
      <p className={styles.madText}>
        {madLibs.description}
      </p>
      <h1 className={styles.glow}>Click the div to reveal</h1>
      <div className={isActive ? [styles.Hero] : ''} onClick={handleClick}>
        {getIt({word, setData})}
      </div>
    </div>
  );
};

export default madL;
