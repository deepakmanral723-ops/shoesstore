import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Login2 = () => {

    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
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
                alert(res.msg)
                navigate("/")
            }
            else {
                alert(res.msg)
            }
        }
    }

    return (
        <>

            <section class="login-page section-b-space">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <h3>Login</h3>
                            <div class="theme-card">
                                <form class="theme-form">
                                    <div class="form-box">
                                        <label for="email" class="form-label">Email</label>
                                        <input onChange={(a) => setemail(a.target.value)} type="text" class="form-control" id="email" placeholder="Email" required="" />
                                    </div>
                                    <div class="form-box">
                                        <label for="review" class="form-label">Password</label>
                                        <input onChange={(a) => setpass(a.target.value)} type="password" class="form-control" id="review" placeholder="Enter your password" required="" />
                                    </div>
                                    <button className="loginbtn" onClick={login}>Login</button>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6 right-login">
                            <h3>New Customer</h3>
                            <div class="theme-card authentication-right">
                                <h6 class="title-font">Create A Account</h6>
                                <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be
                                    able to order from our shop. To start shopping click register.</p>
                                <a href="register.html" class="btn btn-solid">Create an Account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}