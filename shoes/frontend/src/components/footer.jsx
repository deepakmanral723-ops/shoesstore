import "./style.css"

export const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-main">
                <div className="footer-container">
                    <div className="footer-brand">
                        <a href="/" className="footer-logo" aria-label="Shoes Store home">
                            SHOES<span>STORE</span>
                        </a>
                        <p>
                            Discover the perfect pair for every step. Premium styles,
                            trusted brands, and comfort made for every day.
                        </p>
                        <div className="footer-socials" aria-label="Social media links">
                            <a href="#" aria-label="Facebook">f</a>
                            <a href="#" aria-label="Instagram">ig</a>
                            <a href="#" aria-label="X">x</a>
                            <a href="#" aria-label="YouTube">yt</a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h3>Shop</h3>
                            <a href="#">New Arrivals</a>
                            <a href="#">Men</a>
                            <a href="#">Women</a>
                            <a href="#">Kids</a>
                            <a href="#">Sale</a>
                        </div>

                        <div className="footer-column">
                            <h3>Help</h3>
                            <a href="#">Contact Us</a>
                            <a href="#">Shipping</a>
                            <a href="#">Returns</a>
                            <a href="#">Size Guide</a>
                            <a href="#">FAQs</a>
                        </div>

                        <div className="footer-column">
                            <h3>About</h3>
                            <a href="#">Our Story</a>
                            <a href="#">Brands</a>
                            <a href="#">Store Locator</a>
                            <a href="#">Careers</a>
                        </div>
                    </div>

                    <div className="footer-newsletter">
                        <h3>Join the movement</h3>
                        <p>Get exclusive offers, new drops, and style updates.</p>
                        <div className="footer-newsletter-form">
                            <label className="footer-newsletter-label" htmlFor="footer-email">Email address</label>
                            <input id="footer-email" type="email" placeholder="Enter your email" />
                            <button type="button" aria-label="Subscribe">
                                <span>Subscribe</span>
                                <span aria-hidden="true">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-container footer-bottom-content">
                    <p>© {new Date().getFullYear()} Shoes Store. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}