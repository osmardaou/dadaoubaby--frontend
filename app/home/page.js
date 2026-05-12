import styles from './page.module.css';
import Hero from '../../components/Hero/Hero';
import CloudDivider from '../../components/CloudDivider/CloudDivider';
import BrandStory from '../../components/BrandStory/BrandStory';
import BusinessLines from '../../components/BusinessLines/BusinessLines';
import Logistics from '../../components/Logistics/Logistics';
import PartnerJourney from '../../components/PartnerJourney/PartnerJourney';
import Differentials from '../../components/Differentials/Differentials';
import MascotSection from '../../components/MascotSection/MascotSection';
import CTA from '../../components/CTA/CTA';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Hero />
      <CloudDivider />
      <BrandStory />
      <CloudDivider type="waves" color="#ffbf21" />
      <Differentials />
      
      <BusinessLines />
      <MascotSection />
      <Logistics />
      {/* <PartnerJourney /> */}
      <CTA />
      
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Dadaou Baby. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
