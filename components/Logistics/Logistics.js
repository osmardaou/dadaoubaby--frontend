import Image from 'next/image';
import styles from './Logistics.module.css';

export default function Logistics() {
  return (
    <section className={styles.logistics} id="logistica">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label}>Vantagem Logística B2B</span>
          <h2 className={styles.title}>De Belém para o <span className={styles.highlight}>Brasil</span></h2>
          <p className={styles.text}>
           Encurtamos distâncias e eliminamos custos para que suas mercadorias cheguem mais rápido e com o melhor custo-benefício do Brasil. Com envios estratégicos partindo de Belém ou Fortaleza, você escolhe o ponto ideal para sua logística. E não importa onde você esteja: nossa equipe busca ativamente a melhor e mais barata opção de frete para atender a sua região.
          </p>
          
          <div className={styles.routeBox}>
            <div className={styles.hub}>
              <div className={styles.hubIcon}>🏢</div>
              <div>
                <h4>CD Principal: Belém</h4>
                <p>Nosso centro de distribuição oficial e estoque central.</p>
              </div>
            </div>
            
            <div className={styles.arrow}>
               <svg viewBox="0 0 24 24" fill="none" stroke="#FF8742" strokeWidth="2">
                 <path d="M5 12h14M12 5l7 7-7 7" />
               </svg>
            </div>

            <div className={styles.hub}>
              <div className={styles.hubIcon}>🚛</div>
              <div>
                <h4>Entrega: Fortaleza</h4>
                <p>Levamos sua mercadoria até Fortaleza <strong>por nossa conta</strong>.</p>
              </div>
            </div>
          </div>

          <div className={styles.infoNote}>
            <p>
              <strong>Por que Fortaleza?</strong> Identificamos que a capital cearense é o principal hub logístico para centenas de transportadoras e o ponto de encontro de inúmeras excursões que atendem o Nordeste e outras regiões. Para que você aproveite suas parcerias e rotas já existentes, nós assumimos o transporte Belém ➔ Fortaleza por nossa conta. Assim, garantimos flexibilidade total: seu pedido pode ser despachado estrategicamente partindo de Belém ou disponibilizado em Fortaleza para entrega em sua transportadora ou excursão de preferência. É a Dadaou Baby garantindo que o seu estoque esteja sempre abastecido com agilidade e custo zero de transferência.
            </p>
          </div>
        </div>

        <div className={styles.visualWrapper}>
          <div className={styles.imageCard}>
            <Image 
              src="/freteurso.png" 
              alt="Logística Dadaou Baby - Frete Grátis Belém para Fortaleza" 
              width={600} 
              height={600} 
              className={styles.freteImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
