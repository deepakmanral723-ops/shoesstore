import { useLocation } from "react-router-dom"
import "./style.css"
import { useState } from "react"
import { useContext } from "react"
import { Context } from "./context"
import { useEffect } from "react"
import Swal from "sweetalert2"
export const Address = () => {

    const sweetalert = () => {

        Swal.fire({
            title: "Order Confirmed",
            icon: "success",
            draggable: true
        });
    }

    const [items, setitems] = useState([])
    const { userid } = useContext(Context)

    const location = useLocation()
    const [total, settotal] = useState(location.state?.total ?? 0)
    const [tax, settax] = useState(location.state?.tax ?? 0)
    const [grandtotal, setgrandtotal] = useState(location.state?.grandtotal ?? 0)

    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [street, setstreet] = useState("")
    const [city, setcity] = useState("")
    const [state, setstate] = useState("")
    const [code, setcode] = useState("")
    const [country, setcountry] = useState("")

    const Complete = async () => {

        const Store = items.map((p) => ({
            Pname: p.Pname,
            Pimg: p.Pimg,
            Price: p.Price,
            Quantity: p.quantity

        }))

        const data = new FormData()
        data.append("firstname", firstname)
        data.append("lastname", lastname)
        data.append("email", email)
        data.append("phone", phone)
        data.append("street", street)
        data.append("city", city)
        data.append("state", state)
        data.append("code", code)
        data.append("country", country)
        data.append("order", JSON.stringify(Store))

        const result = await fetch(`http://localhost:9000/api/detail`, {
            method: "post",
            body: data
        })
        if (result) {
            const res = await result.json()
            if (res.statuscode === 1) {
                sweetalert()
                Products()
                settotal(0)
                settax(0)
                setgrandtotal(0)
            }
            else {
                alert(res.msg)
            }
        }

    }

    const Products = async () => {
        if (!userid) return

        const result = await fetch(`http://localhost:9000/api/checkout/${userid}`, {
            method: "get"
        })
        if (result) {
            const res = await result.json()
            if (res.statuscode === 1) {
                setitems(res.data)
            }
            else {
                alert(res.msg)
            }
        }

    }
    useEffect(() => { Products() }, [userid])



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
                                    <input onChange={(x) => setfirstname(x.target.value)} id="customer-first-name" name="firstName" autoComplete="given-name" placeholder="e.g. Rahul" required />
                                </div>
                                <div className="customer-field">
                                    <label htmlFor="customer-last-name">Last name</label>
                                    <input onChange={(x) => setlastname(x.target.value)} id="customer-last-name" name="lastName" autoComplete="family-name" placeholder="e.g. Sharma" required />
                                </div>
                                <div className="customer-field">
                                    <label htmlFor="customer-email">Email address</label>
                                    <input onChange={(x) => setemail(x.target.value)} id="customer-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                                </div>
                                <div className="customer-field">
                                    <label htmlFor="customer-phone">Phone number</label>
                                    <input onChange={(x) => setphone(x.target.value)} id="customer-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" required />
                                </div>
                                <div className="customer-field customer-field-wide">
                                    <label htmlFor="customer-address">Street address</label>
                                    <input onChange={(x) => setstreet(x.target.value)} id="customer-address" name="address" autoComplete="street-address" placeholder="House number and street name" required />
                                </div>
                                <div className="customer-field">
                                    <label htmlFor="customer-city">City</label>
                                    <input onChange={(x) => setcity(x.target.value)} id="customer-city" name="city" autoComplete="address-level2" placeholder="e.g. New Delhi" required />
                                </div>
                                <div className="customer-field">
                                    <label htmlFor="customer-state">State / region</label>
                                    <input onChange={(x) => setstate(x.target.value)} id="customer-state" name="state" autoComplete="address-level1" placeholder="e.g. Delhi" required />
                                </div>
                                <div className="customer-field">
                                    <label htmlFor="customer-postal-code">Postal code</label>
                                    <input onChange={(x) => setcode(x.target.value)} id="customer-postal-code" name="postalCode" autoComplete="postal-code" placeholder="e.g. 110001" required />
                                </div>
                                <div className="customer-field">
                                    <label htmlFor="customer-country">Country</label>
                                    <input onChange={(x) => setcountry(x.target.value)} id="customer-country" name="country" autoComplete="country-name" placeholder="e.g. India" required />
                                </div>
                            </div>

                            <button onClick={Complete} className="address-submit-button" type="button">
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
                        <div className="cart-products">
                            {items.length > 0 ? items.map((item) => (
                                <article className="cart-product-item" key={item._id}>
                                    <img
                                        className="cart-product-image"
                                        src={`/uploads/${item.Productimage}`}
                                        alt={item.Productname}
                                    />
                                    <div className="cart-product-details">
                                        <h3>{item.Productname}</h3>
                                        <p>Quantity: {item.quantity}</p>
                                        <strong>₹{item.Price}</strong>
                                    </div>
                                </article>
                            )) : (
                                <p className="address-order-message">Your selected items will appear here.</p>
                            )}
                        </div>

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