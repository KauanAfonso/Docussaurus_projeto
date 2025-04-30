import styles from './Faq.module.css'; // Importando o CSS como um módulo

export function Faq() {
    return (
    <div className={styles.main}>
        <div className={styles.faq}>

            <input type="checkbox" id="faq1" className={styles.faqToggle} />
            <label htmlFor="faq1" className={styles.faqQuestion}>Como obter uma chave de API?</label>
            <div className={styles.faqAnswer}>
                <p>Registre-se na plataforma e acesse o painel de desenvolvedor para gerar sua chave.</p>
            </div>

            
            <input type="checkbox" id="faq2" className={styles.faqToggle} />
            <label htmlFor="faq1" className={styles.faqQuestion}>Como obter uma chave de API?</label>
            <div className={styles.faqAnswer}>
                <p>Registre-se na plataforma e acesse o painel de desenvolvedor para gerar sua chave.</p>
            </div>
    
        </div>
    </div>
    );
}
