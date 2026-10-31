import "./style.css"

export const Header = () => {

    return (
        <header className="site-header">
            <div className="header-container">
                <nav className="navbar" aria-label="Main navigation">
                    <a href="/" className="header-logo" aria-label="Shoes Store home">
                        SHOES<span>STORE</span>
                    </a>

                    <ul className="nav-links">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/wishlist">Shop</a></li>
                        <li><a href="/home#allproducts">New Arrivals</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>

                    <div className="header-actions">
                        <label className="header-search">
                            <span className="header-search-label">Search</span>
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <circle cx="11" cy="11" r="6.5"></circle>
                                <path d="M16 16l4 4"></path>
                            </svg>
                            <input type="search" placeholder="Search" aria-label="Search products" />
                        </label>

                        <a href="/wishlist" className="header-icon-button" aria-label="Wishlist">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21.3l7.7-7.8a5.5 5.5 0 0 0 1.1-8.9z"></path>
                            </svg>
                        </a>

                        <a href="/checkout" className="header-icon-button header-cart" aria-label="Shopping cart">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <circle cx="9" cy="20" r="1"></circle>
                                <circle cx="18" cy="20" r="1"></circle>
                                <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6"></path>
                            </svg>
                            <span className="header-cart-count">0</span>
                        </a>

                        <a href="/" className="header-login">Sign In</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}