import CloudDivider from '../CloudDivider/CloudDivider';
import styles from './BusinessLines.module.css';

export default function BusinessLines() {
  const lines = [
    {
      id: 'giro',
      title: 'Dadaou Baby — O Coração da sua Loja',
      subtitle: 'Onde a economia inteligente encontra o carinho que o bebê precisa.',
      description: 'O motor das vendas para o lojista. Peças com alto giro, preços competitivos e a qualidade que o mercado já confia desde 2006. Ideal para quem busca volume e quer oferecer o melhor custo-benefício para as famílias no dia a dia.',
      image: '/linha/urso.jpeg',
      color: '#fdf8e9', // Creme
      textColor: 'var(--text-main)',
      tagColor: 'var(--primary-orange)'
    },
    {
      id: 'premium',
      title: 'Dadaou Baby PREMIUM — A Excelência ao seu Alcance',
      subtitle: 'Matérias-primas nobres e acabamento superior, com o preço acessível que só a Dadaou oferece',
      description: 'A nossa joia da coroa. Esta linha prova que sofisticação não precisa custar uma fortuna. Utilizamos materiais selecionados e um acabamento rigoroso para entregar um produto visivelmente superior, ideal para elevar o nível da sua vitrine. Mesmo com padrão de elite, mantemos o compromisso com o preço justo, garantindo que você ofereça exclusividade e requinte com um valor surpreendentemente acessível.',
      image: '/linha/ursopremium.jpeg',
      color: '#48b5aa', // Verdinho/Teal
      textColor: '#ffffff',
      tagColor: '#ffbf21'
    }
  ];

  return (
    <section className={styles.businessLines} id="linhas">
      <div className={styles.mainTitleArea}>
        <span className={styles.topLabel}>Categorias Estratégicas</span>
        <h2 className={styles.mainTitle}>Conheça Nossas <span className={styles.highlight}>Linhas</span></h2>
      </div>

      <div className={styles.rows}>
        {/* LINHA DE GIRO */}
        <div 
          className={styles.row}
          style={{ backgroundColor: lines[0].color }}
        >
          <div className={styles.contentSide} style={{ color: lines[0].textColor }}>
            <div className={styles.contentWrapper}>
              <span className={styles.lineTag} style={{ backgroundColor: lines[0].tagColor }}>{lines[0].subtitle}</span>
              <h3 className={styles.lineTitle}>{lines[0].title}</h3>
              <p className={styles.lineDescription}>{lines[0].description}</p>
              <a href="https://wa.me/5591993057070" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                Quero Revender esta Linha
              </a>
            </div>
          </div>
          <div className={styles.imageSide}>
            <div className={styles.imageContainer}>
              <img 
                src={lines[0].image} 
                alt={lines[0].title} 
                className={styles.productImage}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>

        <div className={styles.dividerWrapper}>
          <CloudDivider type="waves" color={lines[0].color} />
        </div>

        {/* LINHA PREMIUM */}
        <div 
          className={`${styles.row} ${styles.reverse}`}
          style={{ backgroundColor: lines[1].color }}
        >
          <div className={styles.contentSide} style={{ color: lines[1].textColor }}>
            <div className={styles.contentWrapper}>
              <span className={styles.lineTag} style={{ backgroundColor: lines[1].tagColor }}>{lines[1].subtitle}</span>
              <h3 className={styles.lineTitle}>{lines[1].title}</h3>
              <p className={styles.lineDescription}>{lines[1].description}</p>
              <a href="https://wa.me/5591993057070" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                Quero Revender esta Linha
              </a>
            </div>
          </div>
          <div className={styles.imageSide}>
            <div className={styles.imageContainer}>
              <img 
                src={lines[1].image} 
                alt={lines[1].title} 
                className={styles.productImage}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
