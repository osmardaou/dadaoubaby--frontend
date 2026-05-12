import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image 
              src="/logo/logotexto.png" 
              alt="Dadaou Baby" 
              width={160} 
              height={50} 
              className={styles.footerLogo}
            />
            <p className={styles.description}>
              Desde 2006, unindo tradição e inovação para vestir o futuro com amor e carinho.
            </p>
          </div>

          <div className={styles.links}>
            <h4>Navegação</h4>
            <Link href="#home">Início</Link>
            <Link href="#historia">Sobre Nós</Link>
            <Link href="#linhas">Nossos produtos</Link>
            <Link href="#logistica">Logística</Link>
          </div>

          <div className={styles.contact}>
            <h4>Contato</h4>
            <p>Belém - PA</p>
            <a href="mailto:contato@dadoubaby.com.br">contato@dadoubaby.com.br</a>
            <div className={styles.social}>
              <a href="https://www.instagram.com/dadaoubaby" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>Instagram</a>
              <a href="https://wa.me/5591993057070" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>WhatsApp</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>&copy; {new Date().getFullYear()} Dadaou Baby. Todos os direitos reservados. Marca Registrada.</p>
          </div>
          
          <div className={styles.credits}>
            Desenvolvido por <a href="http://codebypatrick.dev/" target="_blank" rel="noopener noreferrer" className={styles.devLink}>Patrick.Developer</a>
          </div>


        </div>
      </div>
    </footer>
  );
}
