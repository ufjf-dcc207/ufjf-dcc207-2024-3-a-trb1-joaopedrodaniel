import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <img src="/img/1.png" alt="Logo" className="footer-logo" />
            <div className="footer-social">
                <p>SIGA-NOS NAS REDES SOCIAIS</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <p>&copy; 2023 BELLA NAPOLI. TODOS OS DIREITOS RESERVADOS.</p>
            </div>
        </footer>
    );
};

export default Footer;