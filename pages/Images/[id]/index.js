import Link from "next/link";
import React, { useContext, useEffect, useState} from 'react';
import { MadContext } from "../../../components/Context/MadContext";
import styles from "../../../styles/madIndex_styles.module.css";


const AiImage = () => {
  const { madLibs} = useContext(MadContext);
  const [aiData, setAiData] = useState('')
  console.log(aiData);

  const deepai = require('deepai');
  deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

  async function getImage() {
    var resp = await deepai.callStandardApi("text2img", {
            text: 'goku',
    });
    console.log(resp);
}

  function getwords() {
  
    useEffect(() => {
      let aiDataArray = [];
      for (const words of Array.from([madLibs.wordsanswer])) {
        for (const val in words) {
          aiDataArray.push(words[val]);
          let values = aiDataArray
          setAiData(values.join(' '));
          console.log(values);
        }
      }
      getImage()
     
    }, []);
  }



  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Your Madlib is:
      </p>
      <p className={styles.madText}>
        {madLibs.description}
      </p>
      <p className={styles.text}>
        Your Image is:
      </p>
      {getwords()}
    </div>
  );
}
export default AiImage;
