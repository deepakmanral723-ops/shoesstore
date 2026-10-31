import { useContext, useEffect, useState } from "react"
import "./style.css"
import { Context } from "./context"

export const Wishlists = () => {

    const [data, setdata] = useState([])

    const { userid } = useContext(Context)

    const info = async () => {
        const result = await fetch(`http://localhost:9000/api/getwish/${userid}`, {
            method: "get"
        })
        if (result) {
            const res = await result.json()
            if (res.statuscode === 1) {
                setdata(res.data)

            }
            else {
                alert(res.msg)
            }
        }
    }
    useEffect(() => {
        info()
    }, [userid])
    const remove = async (id) => {
        const result = await fetch(`http://localhost:9000/api/removeitem/${id}`, {
            method: "delete"
        })
        if (result) {
            const res = await result.json()
            if (res.statuscode === 1) {
                alert(res.msg)
                info()
            }
            else {
                alert(res.msg)
            }
        }
    }


    return (
        <main className="wishlist-page">
            <div className="wishlist-content">
                <nav className="wishlist-breadcrumb" aria-label="Breadcrumb">
                    <span>Home</span>
                    <span aria-hidden="true">/</span>
                    <span className="wishlist-breadcrumb-current">Wishlist</span>
                </nav>

                <header className="wishlist-heading">
                    <div>
                        <p className="wishlist-eyebrow">YOUR COLLECTION</p>
                        <h1>My wishlist</h1>
                        <p className="wishlist-intro">
                            {data.length} {data.length === 1 ? "item" : "items"} saved for later
                        </p>
                    </div>
                </header>

                {data.length === 0 ? (
                    <section className="wishlist-empty">
                        <span className="wishlist-empty-icon" aria-hidden="true">♡</span>
                        <h2>Your wishlist is empty</h2>
                        <p>Save the shoes you love and find them here anytime.</p>
                    </section>
                ) : (
                    <section className="wishlist-grid" aria-label="Wishlist items">
                        {data.map((a) => (
                            <article className="wishlist-card" key={a._id}>
                                <button
                                    type="button"
                                    className="wishlist-remove"
                                    aria-label={`Remove ${a.Pname} from wishlist`}
                                    title="Remove from wishlist"
                                    onClick={() => remove(a._id)}
                                >
                                    ×
                                </button>
                                <div className="wishlist-image-wrap">
                                    <img
                                        src={`/uploads/${a.Pimage}`}
                                        className="wishlist-image"
                                        alt={a.Pname}
                                    />
                                </div>
                                <div className="wishlist-card-body">
                                    <p className="wishlist-card-kicker">SHOES</p>
                                    <h2>{a.Pname}</h2>
                                    <div className="wishlist-price-row">
                                        <strong>₹{a.Rate}</strong>
                                        <span>Free delivery</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </section>
                )}
            </div>
        </main>
    )
}