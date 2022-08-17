import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Cards from '../components/Cards'
import { useState, useEffect, useContext } from "react";
import { mad } from "../mad";
import path from 'path'


export default function Home(props) {
  
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
      <div>
        <Cards />
      </div>
     </div>
    </div>
  )
}
