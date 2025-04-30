import React from 'react';
import styles from './FeatureCards.module.css';

export function FeatureCards() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.card}>
          <span className={styles.icon}>🚀</span>
          <h3>Início Rápido</h3>
          <p>Configure a API em minutos com nosso guia passo a passo.</p>
        </div>
        <div className={styles.card}>
          <span className={styles.icon}>📚</span>
          <h3>Referência Completa</h3>
          <p>Explore todos os endpoints e parâmetros disponíveis.</p>
        </div>
        <div className={styles.card}>
          <span className={styles.icon}>💻</span>
          <h3>Exemplos Práticos</h3>
          <p>Veja exemplos de código em várias linguagens.</p>
        </div>
      </div>
    </section>
  );
}