import { useEffect, useState } from "react"

export const Catagory = () => {

    const [category, setcategory] = useState("")
    const [cateimg, setcateimg] = useState("")
    const [brand, setbrand] = useState("")
    const [brandimg, setbrandimg] = useState("")
    const [brandcat, setbrandcat] = useState("")
    const [cdata, setcdata] = useState([])

    const add = async () => {
        const data = new FormData()
        data.append("category", category)  // scheama name,usestatename
        data.append("pic", cateimg)       // scheama name,usestatename

        const result = await fetch("http://localhost:9000/api/category", {
            method: "post",
            body: data
        })

        if (result) {
            const res = await result.json()
            if (res.statuscode === 1) {
                // alert(res.msg)
            }
            else {
                alert(res.msg)
            }
        }
    }


    useEffect(() => {

        getmethod()

    }, [])

    const getmethod = async () => {
        const result = await fetch("http://localhost:9000/api/getcategory", {
            method: "get"
        })
        if (result) {
            const res = await result.json()
            if (res.statuscode === 1) {
                // alert(res.msg)
                setcdata(res.data)
            }
            else {
                // alert(res.msg)
            }
        }
    }

    const addbrand = async () => {
        const data2 = new FormData()
        data2.append("brand", brand)
        data2.append("pic", brandimg)
        data2.append("category", brandcat)
        const result = await fetch("http://localhost:9000/api/branded", {
            method: "post",
            body: data2
        })

        if (result) {
            const res = await result.json()
            if (res.statuscode === 1) {
                alert(res.msg)

            }
            else {
                alert(res.msg)
            }
        }
    }


    return (

        <main className="category-page">
            <div className="category-content">
                <header className="category-heading">
                    <p className="category-eyebrow">STORE MANAGEMENT</p>
                    <h1>Categories &amp; brands</h1>
                    <p>Create a category and add the brand details for your store.</p>
                </header>

                <div className="category-grid">
                    <section className="category-card" aria-labelledby="category-section-title">
                        <div className="category-card-heading">
                            <span className="category-step">01</span>
                            <div>
                                <h2 id="category-section-title">Category</h2>
                                <p>Add a category name and image.</p>
                            </div>
                        </div>
                        <div className="category-fields">
                            <div className="category-field">
                                <label htmlFor="category-name">Category name</label>
                                <input
                                    onChange={(a) => setcategory(a.target.value)}
                                    id="category-name"
                                    name="categoryName"
                                    type="text"
                                    placeholder="e.g. Running shoes"
                                />
                            </div>
                            <div className="category-field">
                                <label htmlFor="category-image">Category image</label>
                                <input
                                    onChange={(a) => setcateimg(a.target.files[0])}
                                    id="category-image"
                                    name="categoryImage"
                                    type="file" accept="image/*" />
                                <span className="category-hint">Choose an image from your device.</span>
                            </div>
                        </div>
                    </section>

                    <section className="category-card" aria-labelledby="brand-section-title">
                        <div className="category-card-heading">
                            <span className="category-step">02</span>
                            <div>
                                <h2 id="brand-section-title">Brand</h2>
                                <p>Add a brand name and image.</p>
                            </div>
                        </div>
                        <div className="category-fields">
                            <div className="category-field">
                                <label htmlFor="category">Select Category</label>

                                <div>
                                    <select id="category" onChange={(e) => setbrandcat(e.target.value)}>
                                        <option value="">Select Category</option>

                                        {
                                            cdata.map((a, index) => (
                                                <option key={index} value={a._id} >
                                                    {a.Category}
                                                </option>
                                            ))
                                        }


                                    </select>
                                </div>

                                <label htmlFor="brand-name">Brand name</label>
                                <input
                                    onChange={(a) => setbrand(a.target.value)}
                                    id="brand-name"
                                    name="brandName"
                                    type="text"
                                    placeholder="e.g. Nike"
                                />
                            </div>
                            <div className="category-field">
                                <label htmlFor="brand-image">Brand image</label>
                                <input
                                    onChange={(a) => setbrandimg(a.target.files[0])}
                                    id="brand-image"
                                    name="brandImage"
                                    type="file"
                                    accept="image/*" />
                                <span className="category-hint">Choose an image from your device.</span>
                            </div>
                        </div>

                    </section>
                </div>
                <div className="category-actions">
                    <button className="category-submit" onClick={add} type="button">Submit</button>
                    <button onClick={addbrand}>submit 2</button>
                </div>
            </div>
        </main>
    )
}