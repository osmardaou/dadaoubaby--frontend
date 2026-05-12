import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.powerBox}>
          <div className={styles.content}>
            <span className={styles.label}>Oportunidade de Negócio</span>
            <h2 className={styles.title}>
              Leve a Dadaou Baby para sua vitrine <br />
              <span className={styles.highlight}>e encante seus clientes.</span>
            </h2>
            <p className={styles.text}>
              Junte-se a centenas de revendedores que já lucram com a marca que é sinônimo de amor e qualidade. Temos condições exclusivas para atacado.
            </p>
            <div className={styles.actions}>
              <a href="https://wa.me/5591993057070" target="_blank" rel="noopener noreferrer" className={styles.button}>
                Quero Revender Agora
              </a>
              <p className={styles.smallNote}>Atendimento rápido via WhatsApp</p>
            </div>
          </div>
          
          {/* Elementos de fundo no box */}
          <div className={styles.decor1}></div>
          <div className={styles.decor2}></div>
        </div>
      </div>
    </section>
  );
}
