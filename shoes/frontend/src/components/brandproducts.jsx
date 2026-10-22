import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import "./style.css"

export const Brandproducts = () => {
    const [product, setProduct] = useState([])
    const [searchParams] = useSearchParams()
    const bi = searchParams.get("bid")

    const getproducts = async () => {
        if (!bi) return

        const result = await fetch(`http://localhost:9000/api/getbybrand/${bi}`, {
            method: "get"
        })

        if (!result) return

        const res = await result.json()
        if (res.statuscode === 1) {
            setProduct(res.data)
        } else {
            alert(res.msg)
        }
    }

    useEffect(() => {
        getproducts()
    }, [bi])

    return (
        <main className="related-page brand-products-page">
            <div className="related-content">
                <header className="related-heading">
                    <p className="related-eyebrow">Find your fit</p>
                    <h1>Brands</h1>
                    <p>Explore the brands available in this collection.</p>
                </header>
                <div className="related-grid brand-products-grid">
                    {product.map((a) => (
                        <Link className="brand-product-link" key={a._id} to={`/buynow?pid=${a._id}`}>
                            <article className="related-card brand-product-card">
                                <div className="brand-product-image-wrap">
                                    <img className="brand-product-image" src={`/uploads/${a.Productimg}`} alt={a.Name} />
                                </div>
                                <div className="related-card-content">
                                    <h2>{a.Name}</h2>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}