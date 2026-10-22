import { useEffect, useState } from "react"
import "./style.css"

export const Productlist = () => {
    const [formMessage, setFormMessage] = useState("")
    const handleSubmit = async (event) => {
        event.preventDefault()
        await products()
    }




    const [cat, setcat] = useState([])

    const [brand, setbrand] = useState([])



    const [pname, setpname] = useState("")
    const [catid, setcatid] = useState("")
    const [brandid, setbrandid] = useState("")
    const [description, setdescription] = useState("")
    const [priceimg, setpriceimg] = useState("")
    const [price, setprice] = useState(0)
    const [saleprice, setsaleprice] = useState(0)


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

    const products = async () => {
        if (!pname || !catid || !brandid || !price) {
            setFormMessage("Please complete the required product fields before submitting.")
            return
        }

        const item = new FormData()
        item.append("productname", pname)
        item.append("cat", catid)
        item.append("brand", brandid)
        item.append("description", description)
        if (priceimg) {
            item.append("pic", priceimg)
        }
        item.append("price", String(price))
        item.append("saleprice", String(saleprice || 0))

        const result = await fetch("http://localhost:9000/api/prices", {
            method: "post",
            body: item
        })
        if (result) {
            const res = await result.json()
            if (res.statuscode === 1) {
                setFormMessage(res.msg || "Product saved successfully.")
                alert(res.msg)
            }
            else {
                setFormMessage(res.msg || "Unable to save product.")
                alert(res.msg)
            }
        }
    }



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
                                <input onChange={(e) => setpname(e.target.value)} />
                            </div>

                            <div className="product-field">
                                <label htmlFor="product-category">Category <span aria-hidden="true">*</span></label>
                                <select id="product-category"
                                    name="category"
                                    defaultValue="" required
                                    onChange={(a) => {
                                        setcatid(a.target.value)
                                        setbrandid("")
                                    }}>
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
                                <select id="product-brand"
                                    name="brand"
                                    value={brandid}
                                    required
                                    onChange={(a) => {
                                        setbrandid(a.target.value)

                                    }}>

                                    <option value="" disabled>Select a brand</option>
                                    {
                                        brand.map((e) =>
                                            <option key={e._id} value={e._id}>{e.Brand}</option>
                                        )
                                    }

                                </select>
                            </div>

                            <div className="product-field product-field-full">
                                <label htmlFor="product-description">Description</label>
                                <textarea
                                    onChange={(a) => setdescription(a.target.value)}
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
                        <div className="productimg" aria-labelledby="product-image-title">
                            <div className="productimg-header">
                                <p className="productimg-kicker">MEDIA</p>
                                <h3 id="product-image-title">Product image</h3>
                            </div>

                            <label className="productimg-upload" htmlFor="product-image">
                                <span className="productimg-upload-icon" aria-hidden="true">↑</span>
                                <span className="productimg-upload-text">Upload product image</span>
                                <input id="product-image" name="productImage" type="file" accept="image/*" onChange={(a) => setpriceimg(a.target.files[0])} />
                            </label>
                            <span className="product-field-hint">Choose a clear front-facing image for the product listing.</span>
                        </div>
                        <div className="price-section" aria-labelledby="pricing-title">
                            <div className="price-header">
                                <div>
                                    <p className="price-kicker">PRICING</p>
                                    <h3 id="pricing-title">Set the product price</h3>
                                </div>
                            </div>

                            <div className="price-grid">
                                <div className="product-field">
                                    <label htmlFor="product-price">Price <span aria-hidden="true">*</span></label>
                                    <input
                                        onChange={(a) => setprice(a.target.value)}
                                        id="product-price"
                                        name="price"
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        placeholder="e.g. 2999"
                                        required
                                    />
                                </div>

                                <div className="product-field">
                                    <label htmlFor="product-sale-price">Sale price</label>
                                    <input
                                        onChange={(a) => setsaleprice(a.target.value)}
                                        id="product-sale-price"
                                        name="salePrice"
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        placeholder="e.g. 2499"
                                    />
                                </div>
                            </div>
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
