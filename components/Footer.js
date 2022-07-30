import Link from 'next/link';
import styles from '../styles/footer_styles.module.css';

const Footer  = () => {
  return (
    <>
      <footer className={styles.footer}>
        <ul>
          <li>Monty</li>
          <li>Nicki</li>
          <li>blake</li>
          <li>forgot</li>
          <li>
          <a href="https://classes.holbertontulsa.com/software-developer-lpb/?utm_term=holberton&utm_campaign=Branded+%7C+Search&utm_source=adwords&utm_medium=ppc&hsa_acc=2236026088&hsa_cam=12521055298&hsa_grp=123058220150&hsa_ad=554121602818&hsa_src=g&hsa_tgt=kwd-300668487307&hsa_kw=holberton&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwuO6WBhDLARIsAIdeyDKycoJhb3AXQx-A2bAprm4yIOsmaISZeqqkwB3Y_BQutQiKdXpaJ0QaAsd8EALw_wcB">Join Us!</a>

      </li>
        </ul>

      </footer>
    </>
  )
}

export default Footer
