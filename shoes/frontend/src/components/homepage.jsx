import { useEffect, useState } from "react"
import { Link, Links } from "react-router-dom"

export const Home = () => {

    const [data, setdata] = useState([])

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

    return (
        <>

            <section class="p-0">
                <a href="category-page.html" class="home text-center">
                    <img src="../assets/images/shoes/full-banner/1.png" alt="" class="img-fluid blur-up lazyload" />
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
                                <Link to={`/related?cid=${a._id}`}>
                                    <div key={`${a.Category}-${index}`} className="category-item">
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
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <div class="title3">
                                <h4>about us</h4>
                                <h2 class="title-inner3">welcome to multi store</h2>
                                <div class="line"></div>
                            </div>
                            <div class="about-text">
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




            <section class="section-b-space pt-0 ratio_40">
                <div class="container">
                    <div class="row partition2">
                        <div class="col-md-6">
                            <a href="category-page.html">
                                <div class="collection-banner p-right text-center">
                                    <div class="img-part">
                                        <img src="../assets/images/shoes/banner/1.png" class="img-fluid blur-up lazyload" alt="" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-6">
                            <a href="category-page.html">
                                <div class="collection-banner p-right text-center">
                                    <div class="img-part">
                                        <img src="../assets/images/shoes/banner/2.png" class="img-fluid blur-up lazyload" alt="" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section class="p-0">
                <div class="container">
                    <div class="row background">
                        <div class="col">
                            <a href="#!">
                                <div class="contain-bg">
                                    <h4 data-hover="size 06">size 06</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col">
                            <a href="#!">
                                <div class="contain-bg">
                                    <h4>size 07</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col">
                            <a href="#!">
                                <div class="contain-bg">
                                    <h4>size 08</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col">
                            <a href="#!">
                                <div class="contain-bg">
                                    <h4>size 09</h4>
                                </div>
                            </a>
                        </div>
                        <div class="col">
                            <a href="#!">
                                <div class="contain-bg">
                                    <h4>size 10</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>



            <section class="section-b-space">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="slide-6 no-arrow d-flex justify-content-center">
                                <div>
                                    <div class="logo-block">
                                        <a href="#!"><img src="../assets/images/logos/1.png" alt="" /></a>
                                    </div>
                                </div>
                                <div>
                                    <div class="logo-block">
                                        <a href="#!"><img src="../assets/images/logos/2.png" alt="" /></a>
                                    </div>
                                </div>
                                <div>
                                    <div class="logo-block">
                                        <a href="#!"><img src="../assets/images/logos/3.png" alt="" /></a>
                                    </div>
                                </div>
                                <div>
                                    <div class="logo-block">
                                        <a href="#!"><img src="../assets/images/logos/4.png" alt="" /></a>
                                    </div>
                                </div>
                                <div>
                                    <div class="logo-block">
                                        <a href="#!"><img src="../assets/images/logos/5.png" alt="" /></a>
                                    </div>
                                </div>
                                <div>
                                    <div class="logo-block">
                                        <a href="#!"><img src="../assets/images/logos/6.png" alt="" /></a>
                                    </div>
                                </div>
                                <div>
                                    <div class="logo-block">
                                        <a href="#!"><img src="../assets/images/logos/7.png" alt="" /></a>
                                    </div>
                                </div>
                                <div>
                                    <div class="logo-block">
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