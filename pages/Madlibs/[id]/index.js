import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { MadContext } from "../../../components/Context/MadContext";
import styles from "../../../styles/madIndex_styles.module.css";




const madL = () => {
  const { madLibs, setMadLibs, data, setData } = useContext(MadContext);
  const word = madLibs.wordsAnswer;
  const router = useRouter();
  const { id } = router.query;
  const [isActive, setIsActive] = useState(true);

  function getIt(props) {
    // console.log(props);
    const proper = props.word
    for (const key in proper) {
      let page = Object.values(proper);  
      return (
        <div className={styles.h1}>
          {page.map(e => {
            return (
              <div>
                <h1 key={e} className={styles.box}>
                  {e}
                  <form>
                    <input
                      type="text"
                      name={e}
                      style={{ width: "20rem" }}
                      onChange={handleChange}
                      value={page.e}
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
    setData(prevData => ({
      // const name = event.target.name
        ...prevData,
        [event.target.name]: event.target.value
      
      
    }))
console.log(data);
    
  }

  
  
  const handleClick = event => {      
    setIsActive(false);               // set the blur
    let wordArr = new Set();          //This sets up the state for inputing text
    for(let key in word) {
      wordArr.add({[word[key]]: ""})
    }
    setData(e => ({
      ...Array.from(wordArr)
    } ))
  };

  useEffect(() => {
    setData(data);
    console.log("handler called");
    // return () => {
    //   console.log('unmounting...');
    // }
  }, [handleChange]);
  
  
  
// console.log(data);
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
        {getIt({word})}
      </div>
    </div>
  );
};

export default madL;
