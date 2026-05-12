import styles from './Differentials.module.css';

export default function Differentials() {
  const items = [
    {
      title: "Qualidade Premium",
      text: "Materiais de alto padrão e acabamento rigoroso para garantir a durabilidade e a confiança que o seu cliente exige.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      color: "#48B5AA"
    },
    {
      title: "Preço Justo",
      text: "O melhor custo-benefício do mercado, garantindo excelente margem de lucro para o lojista e economia para o consumidor.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
      ),
      color: "#FFC021"
    },
    {
      title: "Amor e Carinho",
      text: "Cada peça é produzida com afeto e dedicação, mantendo a essência humana que faz da Dadaou uma marca amada pelas famílias.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      color: "#FF8742"
    },
    {
      title: "Logística Ágil",
      text: "Envio rápido e seguro para garantir que sua loja esteja sempre abastecida com o que há de melhor no mercado.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      color: "#48B5AA"
    }
  ];

  return (
    <section className={styles.differentials}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper} style={{ '--brand-color': item.color }}>
                <div className={styles.iconBox}>{item.icon}</div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
