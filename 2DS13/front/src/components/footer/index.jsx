import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import "./styles.css";

export default function Footer() {
    return (
        <main className="main">
            <div className="container_footer">
                <div className="footer-content">

                    {/* Informações da escola */}
                    <section className="school-info">
                        <h3>Escola SENAI Roberto Mange</h3>
                        <p>Formando profissionais para o futuro.</p>
                        <p><strong>Endereço:</strong> Rua Pastor Cícero Canuto de Lima, 71 - Campinas, SP</p>
                        <p><strong>Contato:</strong> (19) 3772-1840 | contato@senai.com.br</p>
                    </section>

                    {/* Redes sociais */}
                    <section className="social-media">
                        <h4>Redes Sociais</h4>
                        <div className="social-icons">
                            <a href="https://facebook.com/senairobertomange" target="_blank" rel="noopener noreferrer">
                                <Facebook size={24} color="white" />
                            </a>
                            <a href="https://instagram.com/senairobertomange" target="_blank" rel="noopener noreferrer">
                                <Instagram size={24} color="white" />
                            </a>
                            <a href="https://linkedin.com/senairobertomange" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={24} color="white" />
                            </a>
                        </div>
                    </section>

                </div>

                {/* Direitos autorais */}
                <div className="footer-bottom">
                    <p>&copy; 2025 SENAI Roberto Mange. Todos os direitos reservados.</p>
                </div>
            </div>
        </main>
    );
}
