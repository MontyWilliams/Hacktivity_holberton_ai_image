import Link from "next/link";
import React, { useContext, useEffect, useState} from 'react';
import { MadContext } from "../../../components/Context/MadContext";
import styles from "../../../styles/madIndex_styles.module.css";

const AiImage = () => {
  const { madLibs} = useContext(MadContext);
  console.log(madLibs)

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
    </div>
  );
}
export default AiImage;
