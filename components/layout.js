import styles from './layout.module.css';
import Header from './header.js'

export default function Layout({ children }) {
  return (
  <div className={styles.container}>
    <Header />
      <div className={styles.main}>
        {children}
        </div>
    </div>
  );
}
