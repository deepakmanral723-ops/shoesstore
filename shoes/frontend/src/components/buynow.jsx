import { useContext, useEffect, useState } from "react"
import "./style.css"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Context } from "./context"

export const Buynow = () => {

    const [quantity, setquantity] = useState(1)
    const [purchase, setpurachse] = useState([])
    const [pid] = useSearchParams()
    const pd = pid.get("pid")
    const product = purchase[0]
    const navigate = useNavigate()

    const { userid } = useContext(Context)




    const increasequantity = () => {
        setquantity((currentQuantity) => currentQuantity + 1)


    };

    const decreasequantity = () => {
        setquantity((currentQuantity) => Math.max(1, currentQuantity - 1))
    };

    useEffect(() => {

        loadProduct()
    }, [pd])


    const loadProduct = async () => {
        const result = await fetch(`http://localhost:9000/api/buynow/${pd}`, {
            method: "get"
        })
        const res = await result.json()
        if (res.statuscode === 1) {
            setpurachse(res.data)
        }
        else {
            alert(res.msg)
        }
    }


    const cart = async () => {
        if (!product) {
            alert("Product details are still loading.")
            return
        }
        const items = new FormData()
        items.append("proname", product.Name)
        items.append("pic", product.Productimg)
        items.append("price", String(product.Price))
        items.append("qty", String(quantity))
        items.append("userid", userid)

        const result = await fetch(`http://localhost:9000/api/cart`, {
            method: "post",
            body: items
        })
        if (result) {
            const res = await result.json()
            if (res.statuscode === 1) {

                navigate(`/checkout`)

            }
            else {
                alert(res.msg)
            }
        }

    }


    const store = async () => {
        if (!product) {
            alert("Product details are still loading.")
            return
        }
        const item = new FormData()
        item.append("pname", product.Name)
        item.append("pic", product.Productimg)
        item.append("rate", String(product.Price))
        item.append("userid", userid)

        const result = await fetch(`http://localhost:9000/api/wishlist`, {
            method: "post",
            body: item

        })
        if (result) {
            const res = await result.json()
            if (res.statuscode === 1) {
                navigate(`/wishlist`)
            }
            else {
                alert(res.msg)
            }
        }

    }







    return (
        <>

            {
                purchase.map((a) =>
                    <main className="buy-now-page">
                        <div className="buy-now-content">
                            <nav className="buy-now-breadcrumb" aria-label="Breadcrumb">
                                <span>Home</span>
                                <span aria-hidden="true">/</span>
                                <span>Footwear</span>
                                <span aria-hidden="true">/</span>
                                <span className="buy-now-breadcrumb-current">Everyday Sneaker</span>
                            </nav>

                            <section className="buy-now-card" aria-label="Everyday Sneakers product details">
                                <div className="buy-now-gallery">
                                    <div className="buy-now-image-frame">
                                        <span className="buy-now-discount-badge">38% OFF</span>
                                        <img src={`/uploads/${a.Productimg}`} className="buy-now-image" alt="Everyday Sneakers" />
                                    </div>
                                    <div className="buy-now-gallery-thumbnails" aria-hidden="true">
                                        <span className="buy-now-thumbnail buy-now-thumbnail-active" />
                                        <span className="buy-now-thumbnail" />
                                        <span className="buy-now-thumbnail" />
                                        <span className="buy-now-thumbnail" />
                                    </div>
                                </div>

                                <div className="buy-now-details">
                                    <div className="buy-now-category-row">
                                        <p className="buy-now-category">SHOES / EVERYDAY COMFORT</p>
                                        <button
                                            type="button"
                                            className="wishlist-icon"
                                            aria-label="Add to wishlist"
                                            title="Add to wishlist"
                                            onClick={store}
                                        >
                                            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <p className="buy-now-bestseller">BEST SELLER</p>
                                    <h1>{a.Name}</h1>
                                    <div className="buy-now-rating" aria-label="Rated 4.8 out of 5">
                                        <span aria-hidden="true">★★★★★</span>
                                        <span className="buy-now-review-count">4.8 · 256 reviews</span>
                                    </div>

                                    <div className="buy-now-price-row">
                                        <strong>₹{a.Saleprice}</strong>
                                        <del>₹{a.Price}</del>
                                        <span className="buy-now-savings">38% off</span>
                                    </div>
                                    <p className="buy-now-savings-copy">You save ₹1,500 on this pair.</p>

                                    <p className="buy-now-description">
                                        A versatile pair made for everyday wear, with a comfortable fit and a clean, timeless style.
                                    </p>
                                    <p className="buy-now-stock"><span aria-hidden="true">●</span> In stock — ready to ship</p>

                                    <div className="buy-now-quantity">
                                        <span>Quantity</span>
                                        <div className="buy-now-quantity-control" aria-label="Quantity">
                                            <button onClick={decreasequantity} type="button" aria-label="Decrease quantity" >−</button>
                                            <span > {quantity}</span>
                                            <button onClick={increasequantity} type="button" aria-label="Increase quantity">+</button>
                                        </div>
                                    </div>

                                    <p className="buy-now-total">
                                        <span>Total</span>
                                        <strong>₹{a.Saleprice * quantity}</strong>

                                    </p>

                                    <div className="buy-now-actions">
                                        <button className="buy-now-primary" type="button">
                                            Buy Now <span aria-hidden="true">→</span>
                                        </button>
                                        <button onClick={cart} className="buy-now-secondary" type="button">Add to Cart</button>
                                    </div>

                                    <div className="buy-now-benefits">
                                        <span>✓ Free shipping</span>
                                        <span>✓ Secure payment</span>
                                        <span>✓ Easy returns</span>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </main>
                )
            }

        </>
    )

}
