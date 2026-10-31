import { Link } from "react-router-dom"
import "./style.css"

export const Aboutus = () => {
    return (
        <main className="about-page">
            <section className="about-hero">
                <div className="about-hero-inner">
                    <div className="about-hero-copy">
                        <p className="about-eyebrow">Our story</p>
                        <h1>Made for every<br /><span>step forward.</span></h1>
                        <p>At ShoeStore, footwear is more than what you wear. It is comfort, confidence and a way to express who you are every day.</p>
                        <Link className="about-primary-button" to="/home">Explore our collection</Link>
                    </div>
                </div>
            </section>

            <section className="about-story">
                <div className="about-story-grid">
                    <div className="about-story-image">
                        <img src="/uploads/1792065895108-pexels-chuck-8473579.jpg" alt="A selection of modern sneakers" />
                    </div>
                    <div className="about-story-content">
                        <p className="about-section-tag">About ShoeStore</p>
                        <h2>Comfort, style and quality in every pair.</h2>
                        <p>Founded with a passion for footwear, ShoeStore brings together trusted brands and carefully selected styles for men, women and children. From everyday trainers to statement sneakers, our collection is designed for real life.</p>
                        <p>We focus on the details that matter: a great fit, lasting materials, fair prices and friendly support. Whether you are heading to work, the gym or the next adventure, we help you find shoes that feel as good as they look.</p>
                    </div>
                </div>
            </section>

            <section className="about-values">
                <div className="about-values-inner">
                    <div className="about-values-heading">
                        <p className="about-section-tag">What we stand for</p>
                        <h2>Built around you</h2>
                    </div>
                    <div className="about-value-grid">
                        <article className="about-value-card">
                            <div className="about-value-icon" aria-hidden="true">01</div>
                            <h3>Quality first</h3>
                            <p>We partner with dependable brands and choose shoes made to deliver lasting comfort and performance.</p>
                        </article>
                        <article className="about-value-card">
                            <div className="about-value-icon" aria-hidden="true">02</div>
                            <h3>Style for everyone</h3>
                            <p>Discover versatile essentials and fresh releases across a wide range of sizes, looks and occasions.</p>
                        </article>
                        <article className="about-value-card">
                            <div className="about-value-icon" aria-hidden="true">03</div>
                            <h3>Service you trust</h3>
                            <p>Our team is here to make shopping simple, from choosing the right pair to a smooth and secure checkout.</p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="about-stats" aria-label="Company highlights">
                <div className="about-stats-grid">
                    <div className="about-stat"><strong>10K+</strong><span>Happy customers</span></div>
                    <div className="about-stat"><strong>250+</strong><span>Shoe styles</span></div>
                    <div className="about-stat"><strong>20+</strong><span>Top brands</span></div>
                    <div className="about-stat"><strong>7</strong><span>Days support</span></div>
                </div>
            </section>
        </main>
    )
}
