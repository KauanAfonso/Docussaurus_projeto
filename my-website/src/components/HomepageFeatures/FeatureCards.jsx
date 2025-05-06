import React from 'react';
import styles from './FeatureCards.module.css';

export function FeatureCards() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.card}>
          <span className={styles.icon}>🚀</span>
          <h3>Quickly Init</h3>
          <p>Quicly and fast configuration.</p>
        </div>
        <div className={styles.card}>
          <span className={styles.icon}>📚</span>
          <h3>Total Reference</h3>
          <p>Explore all refences and powerfuls.</p>
        </div>
        <div className={styles.card}>
          <span className={styles.icon}>💻</span>
          <h3>Real Examples</h3>
          <p>Real examples to a operation of API.</p>
        </div>
      </div>
    </section>
  );
}