import styles from './ProductLines.module.css';

export default function ProductLines() {
  const lines = [
    {
      id: 'essential',
      name: 'Dadaou Baby',
      description: 'A alegria do dia a dia. Peças confortáveis, coloridas e práticas para todas as brincadeiras.',
      color: 'var(--primary-orange)',
      bg: 'rgba(255, 135, 66, 0.05)'
    },
    {
      id: 'premium',
      name: 'Dadaou Baby Premium',
      description: 'O ápice da sofisticação infantil. Materiais importados, tecidos tecnológicos e design exclusivo.',
      color: 'var(--primary-teal)',
      bg: 'rgba(72, 181, 170, 0.05)'
    }
  ];

  return (
    <section className={styles.productLines}>
      <div className={styles.header}>
        <h2 className={styles.title}>Nossas <span className={styles.highlight}>Coleções</span></h2>
        <p className={styles.subtitle}>Divididas para atender cada momento do seu pequeno tesouro.</p>
      </div>
      
      <div className={styles.grid}>
        {lines.map((line) => (
          <div key={line.id} className={styles.card} style={{ backgroundColor: line.bg }}>
            <div className={styles.lineContent}>
              <h3 style={{ color: line.color }}>{line.name}</h3>
              <p>{line.description}</p>
              <button className={styles.lineBtn} style={{ borderColor: line.color, color: line.color }}>
                Explorar Linha
              </button>
            </div>
            <div className={styles.lineVisual}>
              <div className={styles.visualPlaceholder}>
                {/* Espaço para Imagem da Linha */}
                <div className={styles.floaty} style={{ backgroundColor: line.color }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
