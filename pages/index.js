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
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div>
      <Cards mad={mad} setMadLibs={setMadLibs} />
     </div>
    </div>
  )
}

