'use client';

import styles from './MascotSection.module.css';

export default function MascotSection() {
  return (
    <section className={styles.mascotSection}>
      <div className={styles.container}>
        {/* TEXTO DE APRESENTAÇÃO */}
        <div className={styles.content}>
          <span className={styles.label}>O Coração da Marca</span>
          <h2 className={styles.title}>
            Conheça o Dadaou Bear: <span className={styles.highlight}>O Guardião da Nossa Qualidade</span>
          </h2>
          
          <div className={styles.descriptionWrapper}>
            <p className={styles.description}>
              Muito mais do que um mascote, o <strong>Dadaou Bear</strong> é o símbolo do nosso compromisso com o enxoval perfeito. Ele nasceu para provar que sofisticação, design moderno e acabamento impecável podem (e devem) estar ao alcance de todas as famílias.
            </p>
            <p className={styles.description}>
              Ele é o guardião da nossa <strong>'Qualidade Acessível'</strong>. Do primeiro lookinho aos acessórios indispensáveis para o dia a dia, se tem o sorriso do Dadaou Bear na peça, você tem a certeza de estar levando o melhor custo-benefício do Brasil para o seu bebê.
            </p>
          </div>
        </div>

        {/* VÍDEO ANIMADO */}
        <div className={styles.visual}>
          <div className={styles.imageBox}>
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className={styles.mascotVideo}
            >
              <source src="/videos/ursoanimacao.mp4" type="video/mp4" />
            </video>
            
            <div className={`${styles.cloud} ${styles.cloud1}`}>☁️</div>
            <div className={`${styles.cloud} ${styles.cloud2}`}>☁️</div>
          </div>
        </div>
      </div>
    </section>
  );
}
