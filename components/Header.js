import logo0 from '../public/holberton.png'
import logo1 from '../public/holberton_school.png'
import Image from 'next/image'
import styles from '../styles/header_styles.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerL}>
        <Image className={styles.headerImg}  src={logo0} />
        <h1>Lets learn about the ai!</h1>
      </div>
      <div className={styles.headerR}>
        <p>Dont Get MAD <br /> bro</p>
      </div>
    </div>
  )
}
export default Header
