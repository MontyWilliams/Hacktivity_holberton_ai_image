import '../styles/globals.css'
import Layout from '../components/Layout'
import Footer from "../components/Footer"
import '../public/fonts/Hanalei_Fill/HanaleiFill-Regular.ttf'
import '../public/fonts/Monoton/Monoton-Regular.ttf'


function MyApp({ Component, pageProps }) {
  return (
    <>
     <Layout>
       <Component {...pageProps} />
     </Layout>
     <Footer />
    </>
  )
}

export default MyApp
