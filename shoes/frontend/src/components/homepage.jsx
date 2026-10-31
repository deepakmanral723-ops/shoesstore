import { useEffect, useState } from "react"
import { Link, Links } from "react-router-dom"
import "./style.css"

export const Home = () => {

    const [data, setdata] = useState([])
    const [product, setproduct] = useState([])

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
                setdata(res.data)
            }
        }
        else {
            // alert(res.msg)
        }
    }


    const getbrands = async () => {
        const result = await fetch("http://localhost:9000/api/getproduct", {
            method: "get"
        })
        const res = await result.json()
        if (res.statuscode === 1) {
            // alert(res.msg)
            setproduct(res.data)
        }
        else (alert(
            res.msg
        ))
    }
    useEffect(() => {
        getbrands()
    }, [])



    return (
        <>

            <section className="p-0">
                <a href="category-page.html" className="home text-center">
                    <img src="../assets/images/shoes/full-banner/1.png" alt="" className="img-fluid blur-up lazyload" />
                </a>
            </section>


            <section className="category-section">
                <div className="container">
                    <div className="category-header">
                        <div>
                            <p className="category-eyebrow">shop by style</p>
                            <h2 className="text-dark">product category</h2>
                        </div>
                    </div>

                    <div className="category-grid">
                        {
                            data.map((a, index) => (
                                <Link key={`${a._id}-${index}`} to={`/related?cid=${a._id}`}>
                                    <div className="category-item">
                                        <img src={`/uploads/${a.Cateimg}`} alt={a.Category} />
                                        <div className="category-item-content">
                                            <p>{a.Category}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </section>


            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="title3">
                                <h4>about us</h4>
                                <h2 className="title-inner3">welcome to multi store</h2>
                                <div className="line"></div>
                            </div>
                            <div className="about-text">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                                    dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="section-b-space pt-0 ratio_40">
                <div className="container">
                    <div className="row partition2">
                        <div className="col-md-6">
                            <a href="category-page.html">
                                <div className="collection-banner p-right text-center">
                                    <div className="img-part">
                                        <img src="../assets/images/shoes/banner/1.png" className="img-fluid blur-up lazyload" alt="" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <a href="category-page.html">
                                <div className="collection-banner p-right text-center">
                                    <div className="img-part">
                                        <img src="../assets/images/shoes/banner/2.png" className="img-fluid blur-up lazyload" alt="" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="p-0">
                <div className="container">
                    <div className="row background">
                        <div className="col">
                            <a href="#!">
                                <div className="contain-bg">
                                    <h4 data-hover="size 06">size 06</h4>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href="#!">
                                <div className="contain-bg">
                                    <h4>size 07</h4>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href="#!">
                                <div className="contain-bg">
                                    <h4>size 08</h4>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href="#!">
                                <div className="contain-bg">
                                    <h4>size 09</h4>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href="#!">
                                <div className="contain-bg">
                                    <h4>size 10</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="showproducts" id="allproducts">
                <div className="showproducts-grid">
                    {
                        product.map((a) =>
                            <Link key={a._id} to={`/buynow?pid=${a._id}`}>
                                <article className="showproduct-card">
                                    <div className="showproduct-image-wrap">
                                        <img className="showproduct-image" src={`/uploads/${a.Productimg}`} alt={a.Category} />
                                    </div>
                                    <h3 className="showproduct-name">{a.Name}</h3>
                                    <h3>₹{a.Price}</h3>
                                </article>
                            </Link>
                        )
                    }
                </div>
            </section>



            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="slide-6 no-arrow d-flex justify-content-center">
                                <div>
                                    <div className="logo-block">
                                        <a href="#!"><img src="../assets/images/logos/1.png" alt="" /></a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href="#!"><img src="../assets/images/logos/2.png" alt="" /></a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href="#!"><img src="../assets/images/logos/3.png" alt="" /></a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href="#!"><img src="../assets/images/logos/4.png" alt="" /></a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href="#!"><img src="../assets/images/logos/5.png" alt="" /></a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href="#!"><img src="../assets/images/logos/6.png" alt="" /></a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href="#!"><img src="../assets/images/logos/7.png" alt="" /></a>
                                    </div>
                                </div>
                                <div>
                                    <div className="logo-block">
                                        <a href="#!"><img src="../assets/images/logos/8.png" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}