import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Cards from '../components/Cards'
import { useState, useEffect } from "react";
import { mad } from "../mad";




import path from 'path'

export default function Home() {
  const madLibsArray = useState(mad)

  let [madLibs, setMadLibs] = useState("")


  useEffect(() => {

    mad.map(e => {
      setMadLibs()
      console.log("the madlibs array is set! This should only render on the intial pg Load!")
  
    })
 
  }, [setMadLibs]);
  
  console.log(`current madlib: ${JSON.stringify(madLibs)}`);
 

  // console.log(madSelection)
  return (
    <div className={styles.container}>
      <Head>
        <title>Holberton hacks AI</title>
        <meta name="description" content="Created by the holbies at holberton!" />
      
        <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Monofett&family=Ubuntu+Mono&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,200&display=swap" rel="stylesheet" />
        
      </Head>
     <div>
      <Cards mad={mad} setMadLibs={setMadLibs} />
     </div>
    </div>
  )
}

