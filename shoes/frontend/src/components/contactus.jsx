import { useState } from "react"
import "./style.css"

export const Contactus = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const contactUs = async (event) => {
        event.preventDefault()
        try {
            const result = await fetch("http://localhost:9000/api/contactus", {
                method: "POST",
                body: JSON.stringify({ name, Email: email, phone, subject, message }),
                headers: { "Content-Type": "application/json" }
            })
            const response = await result.json()
            alert(response.msg)
            if (response.statuscode === 1) {
                setName(""); setEmail(""); setPhone(""); setSubject(""); setMessage("")
            }
        } catch {
            alert("Unable to send your message. Please try again later.")
        }
    }

    return (
        <main className="contact-page">
            <section className="contact-hero">
                <div className="contact-hero-inner">
                    <p className="contact-eyebrow">Customer care</p>
                    <h1>We would love to <span>hear from you.</span></h1>
                    <p>Questions about sizing, orders or a pair you love? Our team is ready to help.</p>
                </div>
            </section>
            <section className="contact-content">
                <div className="contact-grid">
                    <div className="contact-details">
                        <p className="contact-section-tag">Get in touch</p>
                        <h2>How can we help?</h2>
                        <p className="contact-intro">Send us a message and the ShoeStore team will get back to you as soon as possible.</p>
                        <div className="contact-info-list">
                            <div className="contact-info-item"><div className="contact-info-icon" aria-hidden="true">☎</div><div><span>Call us</span><strong>+91 123 456 7890</strong></div></div>
                            <div className="contact-info-item"><div className="contact-info-icon" aria-hidden="true">✉</div><div><span>Email us</span><strong>support@shoestore.com</strong></div></div>
                            <div className="contact-info-item"><div className="contact-info-icon" aria-hidden="true">⌖</div><div><span>Visit us</span><strong>New York, United States</strong></div></div>
                            <div className="contact-info-item"><div className="contact-info-icon" aria-hidden="true">◷</div><div><span>Opening hours</span><strong>Mon–Sat, 9:00 AM–7:00 PM</strong></div></div>
                        </div>
                    </div>
                    <form className="contact-form-card" onSubmit={contactUs}>
                        <div className="contact-form-heading"><p>Send a message</p><span>We usually reply within one business day.</span></div>
                        <div className="contact-field contact-field-full"><label htmlFor="contact-name">Full name</label><input id="contact-name" value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder="Enter your full name" required /></div>
                        <div className="contact-field"><label htmlFor="contact-email">Email address</label><input id="contact-email" value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="you@example.com" required /></div>
                        <div className="contact-field"><label htmlFor="contact-phone">Phone number</label><input id="contact-phone" value={phone} onChange={(event) => setPhone(event.target.value)} type="tel" placeholder="Enter your number" /></div>
                        <div className="contact-field contact-field-full"><label htmlFor="contact-subject">Subject</label><input id="contact-subject" value={subject} onChange={(event) => setSubject(event.target.value)} type="text" placeholder="What can we help with?" required /></div>
                        <div className="contact-field contact-field-full"><label htmlFor="contact-message">Message</label><textarea id="contact-message" value={message} onChange={(event) => setMessage(event.target.value)} rows="5" placeholder="Write your message here..." required></textarea></div>
                        <button className="contact-submit-button contact-field-full" type="submit">Send message <span aria-hidden="true">→</span></button>
                    </form>
                </div>
            </section>
        </main>
    )
}
