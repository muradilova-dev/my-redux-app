import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>FruitApp</h1>
        </div>

        <button 
          className={styles.menuToggle} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${isMenuOpen ? styles.barActive1 : ''}`}></span>
          <span className={`${styles.bar} ${isMenuOpen ? styles.barActive2 : ''}`}></span>
          <span className={`${styles.bar} ${isMenuOpen ? styles.barActive3 : ''}`}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li><a href="/" className={styles.navLink}>Home</a></li>
            <li><a href="/fruits" className={styles.navLink}>Fruits List</a></li>
            <li><a href="/add" className={styles.navLink}>Add Fruit</a></li>
            <li><a href="/about" className={styles.navLink}>About</a></li>
            <li><a href="/contact" className={styles.navLink}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;