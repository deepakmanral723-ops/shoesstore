import { useLocation } from "react-router-dom"
import "./style.css"

export const Address = () => {

    const location = useLocation()
    const { total, tax, grandtotal } = location.state || {}
    return (
        <main className="address-page">
            <div className="address-content">
                <nav className="address-breadcrumb" aria-label="Breadcrumb">
                    <span>Home</span>
                    <span aria-hidden="true">/</span>
                    <span>Checkout</span>
                    <span aria-hidden="true">/</span>
                    <span className="address-breadcrumb-current">Customer details</span>
                </nav>

                <header className="address-heading">
                    <p className="address-eyebrow">ALMOST THERE</p>
                    <h1>Customer details</h1>
                    <p>Enter your contact and delivery details to complete your order.</p>
                </header>

                <div className="address-layout">
                    <section className="address-form-card" aria-labelledby="address-form-title">
                        <div className="address-card-heading">
                            <span className="address-step">01</span>
                            <div>
                                <h2 id="address-form-title">Contact &amp; shipping</h2>
                                <p>We’ll use these details to deliver your order.</p>
                            </div>
                        </div>

                        <form className="customer-form">
                            <div className="customer-form-grid">
                                <div className="customer-field">
                                    <label htmlFor="customer-first-name">First name</label>
                                    <input id="customer-first-name" name="firstName" autoComplete="given-name" placeholder="e.g. Rahul" required />
                                </div>
                                <div className="customer-field">
                                    <label htmlFor="customer-last-name">Last name</label>
                                    <input id="customer-last-name" name="lastName" autoComplete="family-name" placeholder="e.g. Sharma" required />
                                </div>
                                <div className="customer-field">
                                    <label htmlFor="customer-email">Email address</label>
                                    <input id="customer-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                                </div>
                                <div className="customer-field">
                                    <label htmlFor="customer-phone">Phone number</label>
                                    <input id="customer-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" required />
                                </div>
                                <div className="customer-field customer-field-wide">
                                    <label htmlFor="customer-address">Street address</label>
                                    <input id="customer-address" name="address" autoComplete="street-address" placeholder="House number and street name" required />
                                </div>
                                <div className="customer-field">
                                    <label htmlFor="customer-city">City</label>
                                    <input id="customer-city" name="city" autoComplete="address-level2" placeholder="e.g. New Delhi" required />
                                </div>
                                <div className="customer-field">
                                    <label htmlFor="customer-state">State / region</label>
                                    <input id="customer-state" name="state" autoComplete="address-level1" placeholder="e.g. Delhi" required />
                                </div>
                                <div className="customer-field">
                                    <label htmlFor="customer-postal-code">Postal code</label>
                                    <input id="customer-postal-code" name="postalCode" autoComplete="postal-code" placeholder="e.g. 110001" required />
                                </div>
                                <div className="customer-field">
                                    <label htmlFor="customer-country">Country</label>
                                    <input id="customer-country" name="country" autoComplete="country-name" placeholder="e.g. India" required />
                                </div>
                            </div>

                            <button className="address-submit-button" type="button">
                                Continue <span aria-hidden="true">→</span>
                            </button>
                            <p className="address-privacy-note">Your information is only used for this order.</p>
                        </form>
                    </section>

                    <aside className="address-order-card" aria-labelledby="address-order-title">
                        <div className="address-order-heading">
                            <div>
                                <p className="address-eyebrow">YOUR ORDER</p>
                                <h2 id="address-order-title">Items</h2>
                            </div>
                            <span className="address-item-count">Order summary</span>
                        </div>
                        <p className="address-order-message">Your selected items will appear here.</p>

                        <div className="address-order-totals">
                            <div><span>Subtotal</span><strong>₹{total}</strong></div>
                            <div><span>Tax</span><strong>₹{tax}</strong></div>
                            <div><span>Delivery</span><strong className="address-free-delivery">Free</strong></div>
                            <div className="address-order-total"><span>Total</span><strong>₹{grandtotal}</strong></div>
                        </div>
                        <p className="address-secure-note"><span aria-hidden="true">✓</span> Secure checkout · Free delivery</p>
                    </aside>
                </div>
            </div>
        </main>
    )
}