
import Link from 'next/link';
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/" className={styles.title}>
         Quiz Hub
      </Link>
      <hr className={styles.divider}/>
    </div>
  );
};

export default Header;