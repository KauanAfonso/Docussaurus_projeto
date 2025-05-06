import styles from './Faq.module.css'; // Importando o CSS como um módulo

export function Faq() {
    return (
    <div className={styles.main}>
        <div className={styles.faq}>

            <input type="checkbox" id="faq1" className={styles.faqToggle} />
            <label htmlFor="faq1" className={styles.faqQuestion}>How can it be used?</label>
            <div className={styles.faqAnswer}>
                <p>The main focus of the API is to serve as a central point of information on how the API was developed.</p>
            </div>

            
            <input type="checkbox" id="faq2" className={styles.faqToggle} />
            <label htmlFor="faq1" className={styles.faqQuestion}>What language was used?</label>
            <div className={styles.faqAnswer}>
                <p>For develop this API, we used Python as a language, and Django RestFramework. </p>
            </div>
    
        </div>
    </div>
    );
}
