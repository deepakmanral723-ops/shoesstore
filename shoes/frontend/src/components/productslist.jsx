import { useEffect, useState } from "react"
import "./style.css"

export const Productlist = () => {
    const [formMessage, setFormMessage] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        setFormMessage("Product saving is not connected yet. Connect a product API to publish this listing.")
    }




    const [cat, setcat] = useState([])
    const [catid, setcatid] = useState("")
    const [brand, setbrand] = useState([])



    const getcat = async () => {
        const result = await fetch("http://localhost:9000/api/getcategory", {
            method: "get"
        })
        if (result) {
            const res = await result.json()
            if (res.statuscode === 1) {

                setcat(res.data)

            }
            else {
                alert(res.msg)
            }
        }
    }

    const getbrand = async () => {
        const result = await fetch(`http://localhost:9000/api/getbrand/${catid}`, {
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
        if (catid) {
            getbrand()
        }
    }, [catid])



    useEffect(() => {
        getcat()
    }, [])



    return (
        <main className="product-page">
            <div className="product-content">
                <nav className="product-breadcrumb" aria-label="Breadcrumb">
                    <span>Store management</span>
                    <span className="product-breadcrumb-separator" aria-hidden="true">/</span>
                    <span className="product-breadcrumb-current">Products</span>
                </nav>

                <header className="product-heading">
                    <div>
                        <p className="product-eyebrow">PRODUCT CATALOG</p>
                        <h1>Add a product</h1>
                        <p className="product-intro">
                            Add all the details shoppers need to find their next favorite pair.
                        </p>
                    </div>
                    <span className="product-status">
                        <span className="product-status-dot" aria-hidden="true" />
                        New product
                    </span>
                </header>

                <form
                    className="product-form"
                    onSubmit={handleSubmit}
                    onReset={() => {
                        setFormMessage("")
                    }}
                >
                    <section className="product-card" aria-labelledby="product-details-title">
                        <div className="product-card-heading">
                            <span className="product-step">01</span>
                            <div>
                                <h2 id="product-details-title">Product details</h2>
                                <p>Start with the essentials for your listing.</p>
                            </div>
                        </div>

                        <div className="product-fields">
                            <div className="product-field product-field-full">
                                <label htmlFor="product-name">Product name <span aria-hidden="true">*</span></label>
                                <input
                                    id="product-name"
                                    name="productName"
                                    type="text"
                                    placeholder="e.g. "
                                    autoComplete="off"
                                    required
                                />
                            </div>

                            <div className="product-field">
                                <label htmlFor="product-category">Category <span aria-hidden="true">*</span></label>
                                <select id="product-category"
                                    name="category"
                                    defaultValue="" required
                                    onChange={(a) => setcatid(a.target.value)}>
                                    <option value="" disabled>Select a category</option>
                                    {
                                        cat.map((e) =>
                                            <option value={e._id}>{e.Category}</option>
                                        )
                                    }

                                </select>
                            </div>

                            <div className="product-field">
                                <label htmlFor="product-brand">Brand <span aria-hidden="true">*</span></label>
                                <select id="product-category"
                                    name="category"
                                    defaultValue="" required
                                >
                                    <option value="" disabled>Select a category</option>
                                    {
                                        brand.map((e) =>
                                            <option value={e._id}>{e.Brand}</option>
                                        )
                                    }

                                </select>
                            </div>

                            <div className="product-field product-field-full">
                                <label htmlFor="product-description">Description</label>
                                <textarea
                                    id="product-description"
                                    name="description"
                                    placeholder="Tell shoppers what makes this pair special..."
                                    rows="5"
                                />
                                <span className="product-field-hint">
                                    Share the fit, materials, and features customers will love.
                                </span>
                            </div>
                        </div>
                        <div className="prices">
                            <label>price </label>
                            <input placeholder="price"></input>

                            <label>Sale price</label>
                            <input placeholder="saleprice"></input>
                        </div>

                        <footer className="product-form-footer">
                            <p className={`product-form-message${formMessage ? " product-form-notice" : ""}`} role="status" aria-live="polite">
                                {formMessage || <><span aria-hidden="true">*</span> Required fields</>}
                            </p>
                            <div className="product-form-actions">
                                <button className="product-button product-button-secondary" type="reset">
                                    Clear form
                                </button>
                                <button className="product-button product-button-primary" type="submit">
                                    Add product
                                    <span aria-hidden="true">→</span>
                                </button>
                            </div>
                        </footer>
                    </section>
                </form>
            </div>
        </main>
    )
}
