import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Cards from '../components/Cards'

import path from 'path'

export default function Home() { 


  return (
    <div className={styles.container}>
      <Head>
        <title>Holberton hacks AI</title>
        <meta name="description" content="Created by the holbies at holberton!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div>
      <Cards />
     </div>
    </div>
  )
}

// export const getStaticProps =  () => {
//   const data = JSON.stringify(mad)
  
//   return {
//     props: {
//       madLibList: data
//     }
//   }
// }
