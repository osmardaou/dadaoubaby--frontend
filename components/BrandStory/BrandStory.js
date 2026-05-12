'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './BrandStory.module.css';

function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [started, end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
}

export default function BrandStory() {
  return (
    <section className={styles.brandStory} id="historia">
      <div className={styles.container}>
        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <div className={styles.yearBadge}>
              <Counter end={20} suffix="+" /> Anos
            </div>
            <Image 
              src="/logo/logoalternativa.png" 
              alt="Dadaou Baby Logo" 
              width={600} 
              height={600} 
              className={styles.logoImage}
              priority
            />
          </div>
        </div>
        
        <div className={styles.content}>
          <h2 className={styles.title}>Sobre nós</h2>
          <p className={styles.text}>
           A Dadaou Baby nasceu de um propósito claro: transformar o mercado de enxoval infantil, unindo o que há de melhor em design e conforto à realidade das famílias brasileiras. Na Dadaou Baby, acreditamos que todo bebê merece o melhor, sem que isso custe uma fortuna. Unimos materiais de alta qualidade a um preço justo porque entendemos que o cuidado real é aquele que protege o pequeno e respeita o orçamento da família. Do tecido da roupinha ao acabamento dos acessórios, tudo é pensado para entregar o máximo de carinho com a melhor economia do mercado.
          </p>
          

          
          <a href="https://wa.me/5591993057070" target="_blank" rel="noopener noreferrer" className={styles.button}>Seja um Revendedor Agora</a>
        </div>
      </div>
    </section>
  );
}
