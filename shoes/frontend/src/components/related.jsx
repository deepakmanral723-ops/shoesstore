import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export const Related = () => {
    const [cid] = useSearchParams()
    const cateid = cid.get("cid")
    const [brand, setbrand] = useState([])

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
        show()
    }, [])

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
                            <article className="related-card" key={a._id}>
                                <img src={`/uploads/${a.Brandimg}`} alt={a.Brand} />
                                <div className="related-card-content">
                                    <h2>{a.Brand}</h2>
                                </div>
                            </article>
                        )
                    }
                </div>
            </div>
        </main>
    )
}