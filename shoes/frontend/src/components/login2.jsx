import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./style.css"
import { Context } from "./context"

export const Login2 = () => {

    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const { setutype } = useContext(Context)
    const navigate = useNavigate()

    const login = async (q) => {
        q.preventDefault()
        const result = await fetch("http://localhost:9000/api/login", {
            method: "post",
            body: JSON.stringify({ email, pass }),
            headers: { "Content-type": "application/json" }
        })
        if (result) {
            const res = await result.json()
            if (res.statuscode === 1) {
                localStorage.setItem("keyname", JSON.stringify(res.jwttoken))
                alert(res.msg)
                setutype(res.data.UserType)
                navigate("/home")
            }
            else {
                alert(res.msg)
            }
        }
    }

    return (
        <section className="login2-page">
            <div className="login2-card">
                <div className="login2-brand-panel">
                    <div className="login2-brand">
                        <span>S</span>
                        <strong>SHOE<strong>STORE</strong></strong>
                    </div>
                    <div className="login2-shoe-mark">S</div>
                    <div className="login2-brand-copy">
                        <p>Premium Collection</p>
                        <h1>Step into your style.</h1>
                        <span>Discover the latest sneakers and everyday essentials made for every move.</span>
                    </div>
                </div>

                <div className="login2-form-panel">
                    <form className="login2-form">
                        <div className="login2-heading">
                            <p>Welcome Back</p>
                            <h2>Sign in</h2>
                            <span>Enter your details to continue shopping.</span>
                        </div>
                        <div className="login2-field">
                            <label htmlFor="email">Email</label>
                            <input onChange={(a) => setemail(a.target.value)} type="text" id="email" placeholder="Email address" required="" />
                        </div>
                        <div className="login2-field">
                            <label htmlFor="review">Password</label>
                            <input onChange={(a) => setpass(a.target.value)} type="password" id="review" placeholder="Enter your password" required="" />
                        </div>
                        <button className="login2-submit" type="button" onClick={login}>Login <span>→</span></button>
                        <div className="login2-divider"><span>New to ShoeStore?</span></div>
                        <a href="register" className="login2-register">Create an Account</a>
                    </form>
                </div>
            </div>
        </section>
    )
}