import React from 'react';
import styles from './Itens.module.css'; // Importação correta do CSS Modules

export function Itens() {
  return (
    <section>
      <h2>How do Start?</h2>
      <div className={styles.contentBox}> {/* Usando className e a classe do CSS Modules */}
        <ol>
          <li>Registre-se na plataforma para obter credenciais de API.</li>
          <li>
            Consulte a <a href="index.html">documentação técnica</a> para detalhes dos endpoints.
          </li>
          <li>Integre a API ao seu sistema utilizando as credenciais fornecidas.</li>
          <li>
            Entre em contato com o <a href="#suporte">suporte</a> para dúvidas ou customizações.
          </li>
        </ol>
      </div>
    </section>
  );
}