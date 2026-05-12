'use client';

import { useEffect, useRef } from 'react';
import styles from './PartnerJourney.module.css';

export default function PartnerJourney() {
  const stepsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, { threshold: 0.1 });

    const currentSteps = stepsRef.current;
    currentSteps.forEach(step => {
      if (step) observer.observe(step);
    });

    return () => {
      currentSteps.forEach(step => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  const steps = [
    {
      id: 1,
      title: 'Primeiro Contato',
      description: 'Inicie sua jornada chamando nossa equipe comercial no WhatsApp. Estamos prontos para te atender.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 9h8" />
          <path d="M8 13h6" />
        </svg>
      ),
      color: '#48B5AA'
    },
    {
      id: 2,
      title: 'Avaliação Rápida',
      description: 'Validamos o seu CNPJ e o perfil da sua loja para garantir exclusividade e segurança.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      color: '#FF8742'
    },
    {
      id: 3,
      title: 'Acesso Exclusivo',
      description: 'Receba nossas tabelas de atacado e conheça em detalhes as Linha Dadaou Baby — O Coração da sua Loja e Linha Dadaou Baby PREMIUM — A Excelência ao seu Alcance',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1" />
        </svg>
      ),
      color: '#FFBF21'
    },
    {
      id: 4,
      title: 'Parceria de Sucesso',
      description: 'Pedido realizado, estoque abastecido e suporte total para você vender mais.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
          <path d="M9 12H4s.5-1 1-4c1.5 0 3 .5 3 .5L9 12Z" />
          <path d="M15 15v5s-1 .5-4 1c0-1.5.5-3 .5-3L15 15Z" />
        </svg>
      ),
      color: '#48B5AA'
    }
  ];

  return (
    <section className={styles.journey}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>O Caminho do Sucesso</span>
          <h2 className={styles.title}>Como ser um <span className={styles.highlight}>Parceiro</span></h2>
          <p className={styles.subtitle}>4 passos simples para abastecer sua loja com autoridade e lucro</p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={styles.stepCard}
              ref={el => stepsRef.current[index] = el}
            >
              <div className={styles.stepNumber}>{step.id}</div>
              <div className={styles.iconBox} style={{ color: step.color }}>
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className={styles.connector}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
