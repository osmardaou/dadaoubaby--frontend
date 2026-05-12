'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    { line1: "Qualidade que encanta", line2: "preço que ", line3: "surpreende" },
    { line1: "Muito", line2: "Amor", line3: "envolvido" }
  ];

  useEffect(() => {
    const current = phrases[currentPhraseIndex];
    let timer;

    if (!isDeleting) {
      if (text1.length < current.line1.length) {
        timer = setTimeout(() => setText1(current.line1.slice(0, text1.length + 1)), 50);
      } else if (text2.length < current.line2.length) {
        timer = setTimeout(() => setText2(current.line2.slice(0, text2.length + 1)), 50);
      } else if (text3.length < current.line3.length) {
        timer = setTimeout(() => setText3(current.line3.slice(0, text3.length + 1)), 50);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 15000);
      }
    } else {
      if (text3.length > 0) {
        timer = setTimeout(() => setText3(text3.slice(0, -1)), 30);
      } else if (text2.length > 0) {
        timer = setTimeout(() => setText2(text2.slice(0, -1)), 30);
      } else if (text1.length > 0) {
        timer = setTimeout(() => setText1(text1.slice(0, -1)), 30);
      } else {
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text1, text2, text3, isDeleting, currentPhraseIndex]);

  const isSecondPhrase = currentPhraseIndex === 1;

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        
        {/* LADO DO CONTEÚDO (Desktop: Esquerda | Mobile: Embaixo) */}
        <div className={styles.content}>
          <div className={styles.logoWrapper}>
            <Image 
              src="/logo/logotexto.png" 
              alt="Dadaou Baby" 
              width={400} 
              height={120} 
              className={styles.heroLogo}
              priority
            />
          </div>
          <h1 className={styles.title}>
            <div className={styles.line}>{text1}</div>
            <div className={styles.line}>
              {isSecondPhrase ? <span className={styles.highlight}>{text2}</span> : text2}
            </div>
            <div className={styles.line}>
              {isSecondPhrase ? text3 : <span className={styles.highlight}>{text3}</span>}
            </div>
          </h1>
          <p className={styles.subtitle}>
            Do primeiro lookinho aos acessórios essenciais: Tudo o que o seu bebê precisa em um só lugar. Qualidade premium para os pequenos exploradores.
          </p>
          <div className={styles.actions}>
            <a href="https://wa.me/5591993057070" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
              Quero ser Revendedor
            </a>
          </div>
        </div>

        {/* LADO VISUAL (Desktop: Direita | Mobile: Topo 100vh) */}
        <div className={styles.visualSpace}>
          <div className={styles.videoWrapper}>
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              preload="auto"
              className={styles.heroVideo}
              poster="/urso_poster_hero_1778070167732.png"
            >
              <source src="/videos/urso.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
            
            <div className={styles.scrollIndicator}>
              <div className={styles.arrow}></div>
            </div>
          </div>
        </div>

      </div>
      
      <div className={styles.floatingShape1}></div>
      <div className={styles.floatingShape2}></div>
    </section>
  );
}
