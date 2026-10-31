import { useContext, useEffect, useState } from "react"
import "./style.css"
import { Context } from "./context"

export const Checkout = () => {

    const [check, setcheck] = useState([])
    const { userid } = useContext(Context)
    const [quantity, setquantity] = useState()


    const updatequantity = (index, change) => {
        const value = [...check]

        const newqty = Number(value[index].quantity) + change
 if(newqty<1) return
        
        value[index].quantity = newqty
       

        setcheck(value)

    };

    

    const detail = async () => {
        const result = await fetch(`http://localhost:9000/api/checkout/${userid}`, {
            method: "get"
        })
        if (result) {
            const res = await result.json()
            if (res.statuscode === 1) {
                setcheck(res.data)
                setquantity(res.data.Quantity)
            }
            else {
                alert(res.msg)
            }
        }
    }
    useEffect(() => {
        detail()
    }
        , [userid])

    const remove = async (id) => {
        const result = await fetch(`http://localhost:9000/api/delete/${id}`, {
            method: "delete"
        })
        if (result) {
            const res = await result.json()
            if (res.statuscode === 1) {
                alert(res.msg)
                detail()
            }
            else {
                alert(res.msg)
            }
        }
    }



    return (
        <>

            <main className="checkout-page">
                <div className="checkout-content">
                    <nav className="checkout-breadcrumb" aria-label="Breadcrumb">
                        <span>Home</span>
                        <span aria-hidden="true">/</span>
                        <span className="checkout-breadcrumb-current">Shopping cart</span>
                    </nav>

                    <header className="checkout-heading">
                        <div>
                            <p className="checkout-eyebrow">YOUR BAG</p>
                            <h1>Shopping cart</h1>
                            <p className="checkout-intro">Review your picks before you place your order.</p>
                        </div>
                        <div className="checkout-progress" aria-label="Checkout progress">
                            <span className="checkout-progress-active">01 <span>Cart</span></span>
                            <span className="checkout-progress-line" aria-hidden="true" />
                            <span>02 <span>Checkout</span></span>
                            <span className="checkout-progress-line" aria-hidden="true" />
                            <span>03 <span>Done</span></span>
                        </div>
                    </header>

                    <div className="checkout-layout">
                        <section className="checkout-items-card" aria-labelledby="checkout-items-title">
                            <div className="checkout-card-heading">
                                <div>
                                    <h2 id="checkout-items-title">Your items</h2>
                                    <p>Check sizes and quantities before continuing.</p>
                                </div>
                                <span className="checkout-secure-label">
                                    <span aria-hidden="true">✓</span> Secure checkout
                                </span>
                            </div>
                            {
                                check.map((a, index) =>
                                    <div className="purchase-item" key={index}>
                                        <img
                                            className="checkout-item-image"
                                            alt={a.Productname}
                                            src={`/uploads/${a.Productimage}`}
                                        />
                                        <div className="purchase-item-details">
                                            <span className="purchase-item-label">Item</span>
                                            <h3>{a.Productname}</h3>
                                            <div className="purchase-item-meta">
                                                <p><span>Price</span><strong>{a.Price}</strong></p>

                                                <button onClick={() => updatequantity(index, -1)}>-</button>
                                                <p><span>Quantity</span><strong>{a.quantity}</strong></p>
                                                <button onClick={() => updatequantity(index, 1)}>+</button>

                                                <button onClick={() => remove(a._id)}>❌</button>
                                            </div>
                                        </div>
                                    </div>

                                )
                            }
                            <div className="checkout-delivery-note">
                                <span className="checkout-delivery-icon" aria-hidden="true">↗</span>
                                <span><strong>Free delivery</strong><br />Complimentary shipping on your order.</span>
                            </div>
                        </section>

                        <aside className="checkout-summary-card" aria-labelledby="checkout-summary-title">
                            <h2 id="checkout-summary-title">Order summary</h2>
                            <div className="checkout-summary-row">
                                <span>Subtotal</span>
                                <span id="subtotal">₹00</span>
                            </div>
                            <div className="checkout-summary-row">
                                <span>Tax <span className="checkout-tax-note">(8%)</span></span>
                                <span id="tax">$0.00</span>
                            </div>
                            <div className="checkout-summary-row checkout-shipping-row">
                                <span>Shipping</span>
                                <span className="checkout-free-shipping">Free</span>
                            </div>
                            <div className="checkout-summary-total">
                                <span>Total</span>
                                <strong id="total">$0.00</strong>
                            </div>
                            <button className="checkout-button" type="button">
                                Continue to checkout <span aria-hidden="true">→</span>
                            </button>
                            <p className="checkout-payment-note">
                                <span aria-hidden="true">⌑</span> Secure payment · Easy returns
                            </p>
                        </aside>
                    </div>
                </div>
            </main>


        </>
    )
}
