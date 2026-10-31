import "./style.css"

export const Adminheader = () => {
    return (
        <header className="admin-header">
            <div className="admin-header-container">
                <nav className="admin-navbar" aria-label="Admin navigation">
                    <a href="/" className="admin-header-logo" aria-label="Shoes Store admin home">
                        SHOES<span>ADMIN</span>
                    </a>

                    <ul className="admin-nav-links">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/brandproduct">Brands</a></li>
                        <li><a href="/catagory">Category</a></li>
                        <li><a href="/product">Productlist</a></li>
                    </ul>

                    <a href="/" className="admin-signin">Sign In</a>
                </nav>
            </div>
        </header>
    )
}