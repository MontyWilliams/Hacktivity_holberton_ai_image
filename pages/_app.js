import '../styles/globals.css'
import Layout from '../components/Layout'
import '../public/fonts/Hanalei_Fill/HanaleiFill-Regular.ttf'
import '../public/fonts/Monoton/Monoton-Regular.ttf'
import { MadContext } from '../components/Context/MadContext'
import { mad } from "../mad";
import { useState, useEffect, useContext } from "react";

function MyApp({ Component, pageProps, props }) {
  const madLibsArray = useState(mad)
  let [madLibs, setMadLibs] = useState("")
  const [data, setData] = useState({})
  useEffect(() => {
    mad.map(e => {
      setMadLibs(e)
      console.log("the madlibs array is set! This should only render on the intial pg Load!")
  
    })

  }, [setMadLibs]);
  
  // console.log(`current madlib: ${JSON.stringify(madLibs)}`);

  return (
      <MadContext.Provider value={{mad, madLibs, setMadLibs, data, setData}}>
         <Layout>
           <Component {...pageProps} />
         </Layout>
      </MadContext.Provider>
  )
}

export default MyApp

export async function getStaticProps() {
  const res = mad;
  return {
    props: {res},
  }
}
