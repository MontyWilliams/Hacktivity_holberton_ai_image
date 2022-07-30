import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { madLibLibrary , LiBy } from '../madlibs'

export default function Home({madLibLibHommie}) { 
console.log(madLibLibHommie)
  return (
    <div className={styles.container}>
      <Head>
        <title>Holberton hacks AI</title>
        <meta name="description" content="Created by the holbies at holberton!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div>
      {madLibLibHommie.map((e) => {
        return (
          <div>
             <h2>{"MadLib # " +`${madLibLibHommie.indexOf(e)}`}</h2>
              <p>{"This one has " +`${e.value[1]}` + " madLibs to add!"}</p>
              <p>{"They are" + " " + `${e.value[2] + " " + e.value[3] + " " + e.value[4] + " " + e.value[5]}`}</p>
              
          </div>
        )
      })}
     </div>
    </div>
  )
}

export const getStaticProps = () => {
  const madLibLibHommie = madLibLibrary
  return {
    props: {
      madLibLibHommie
    }
  }
}

