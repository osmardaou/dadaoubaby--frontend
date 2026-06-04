'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={`${styles.logo} ${scrolled ? styles.logoVisible : styles.logoHidden}`}>
          <Image 
            src="/logo/logotexto.png" 
            alt="Dadaou Baby" 
            width={180} 
            height={60} 
            className={styles.logoImage}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <a href="#home">Início</a>
          <a href="#historia">Sobre Nós</a>
          <a href="#linhas">Linhas de produtos</a>
          <a href="#logistica">Logística</a>
          <a href="#contato" className={styles.cta}>Seja um Revendedor</a>
        </nav>

        {/* Mobile Toggle */}
        <div className={styles.mobileActions}>
          <a href="https://wa.me/5591993057070" target="_blank" rel="noopener noreferrer" className={styles.mobileCta}>WhatsApp</a>
          <button className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.menuOverlay} ${menuOpen ? styles.menuVisible : ''}`}>
        <nav className={styles.mobileNav}>
          <a href="#home" onClick={toggleMenu}>Início</a>
          <a href="#historia" onClick={toggleMenu}>Sobre nós</a>
          <a href="#linhas" onClick={toggleMenu}>Linhas de produtos</a>
          <a href="#logistica" onClick={toggleMenu}>Logística</a>
          <a href="#contato" className={styles.mobileMenuCta} onClick={toggleMenu}>Seja um Revendedor</a>
        </nav>
      </div>
    </header>
  );
}
