import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import "./style.css"

export const Related = () => {
    const [cid] = useSearchParams()
    const cateid = cid.get("cid")
    const [brand, setbrand] = useState([])
    
    const [product, setproduct] = useState([])

    const show = async () => {
        const result = await fetch(`http://localhost:9000/api/getbrand/${cateid}`, {
            method: "get"
        })
        if (result) {
            const res = await result.json()
            if (res.statuscode === 1) {

                setbrand(res.data)
            }
            else {
                alert(res.msg)
            }
        }
    }
    useEffect(() => {
        show();
        getproduct();
    }, [])

    const getproduct = async () => {
        const result = await fetch(`http://localhost:9000/api/categoryproduct/${cateid}`, {
            method: "get"
        })
        if (result) {
            const res = await result.json()
            if (res.statuscode === 1) {
                setproduct(res.data)
            }
            else {
                alert(res.msg)
            }
        }


    }

    return (
        <main className="related-page">
            <div className="related-content">
                <header className="related-heading">
                    <p className="related-eyebrow">Find your fit</p>
                    <h1>Brands</h1>
                    <p>Explore the brands available in this collection.</p>
                </header>
                <div className="related-grid">
                    {
                        brand.map((a) =>
                            <Link to={`/brandproduct?bid=${a._id}`}>
                                <article className="related-card" key={a._id}>
                                    <img src={`/uploads/${a.Brandimg}`} alt={a.Brand} />
                                    <div className="related-card-content">
                                        <h2>{a.Brand}</h2>
                                    </div>
                                </article>
                            </Link>
                        )
                    }
                </div>


                <section className="category-products-section" aria-labelledby="category-products-title">
                    <h2 className="category-products-title" id="category-products-title">Products in this collection</h2>
                    <div className="category-products">
                        {
                            product.map((a) =>
                                <Link className="category-product-link" key={a._id} to={`/buynow?pid=${a._id}`}>
                                    <article className="category-product-card">
                                        <div className="category-product-image-wrap">
                                            <img className="category-product-image" src={`/uploads/${a.Productimg}`} alt={a.Name} />
                                        </div>
                                        <div className="category-product-details">
                                            <h3>{a.Name}</h3>
                                            <p>{a.Price}</p>
                                        </div>
                                    </article>
                                </Link>
                            )
                        }
                    </div>
                </section>
            </div>
        </main>
    )
}