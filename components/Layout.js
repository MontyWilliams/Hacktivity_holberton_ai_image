import styles from '../styles/layout_styles.module.css'
import Nav from "./Nav"
import Header from "./Header"
import Footer from "./Footer"


const Layout = ({children}) => {
  return (
    <>
      <Nav/>
      <Header/>

      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
      <Footer/>
    </>
  )
}
export default Layout
