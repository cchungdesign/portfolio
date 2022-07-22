export default function Header() {
    return (
        <header className={styles.header}>
        <div className={styles.logo}>Chris Chung</div>
        <div className={styles.navbar}>
          <a className={styles.currentpage} href="#design">Design</a>
          <a href="#illustration">Illustration</a>
          <a href="#photography">Photography</a>
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
        </div>
      </header>
    )
}