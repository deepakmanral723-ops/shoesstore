import { useState } from "react"
import "./style.css"

export const Register = () => {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


    const signin = async (e) => {
        e.preventDefault()
        const result = await fetch("http://localhost:9000/api/register", {
            method: "post",
            body: JSON.stringify({ firstname, lastname, email, password }),
            headers: { "Content-type": "application/json" }
        })
        if (result) {
            const res = await result.json()
            if (res.statuscode === 1) {
                alert(res.msg)
            }
            else if (res.statuscode === 2) {
                alert("already registered with that email")
            }
            else {
                alert(res.msg)
            }
        }
    }

    return (
        <section className="register-page">
            <div className="register-card">
                <div className="register-brand-panel">
                    <div className="register-brand">
                        <span>S</span>
                        <strong>SHOE<strong>STORE</strong></strong>
                    </div>
                    <div className="register-shoe-mark">S</div>
                    <div className="register-brand-copy">
                        <p>Join the Community</p>
                        <h1>Find your perfect pair.</h1>
                        <span>Create your account to save favorites, track orders and enjoy a smoother shopping experience.</span>
                    </div>
                </div>

                <div className="register-form-panel">
                    <form className="register-form">
                        <div className="register-heading">
                            <p>Create Account</p>
                            <h2>Sign up</h2>
                            <span>Enter your details to start shopping.</span>
                        </div>
                        <div className="register-fields">
                            <div className="register-field">
                                <label htmlFor="fname">First Name</label>
                                <input onChange={(a) => setfirstname(a.target.value)} type="text" id="fname" placeholder="First name" required="" />
                            </div>
                            <div className="register-field">
                                <label htmlFor="lname">Last Name</label>
                                <input onChange={(a) => setlastname(a.target.value)} type="text" id="lname" placeholder="Last name" required="" />
                            </div>
                            <div className="register-field register-field-wide">
                                <label htmlFor="email">Email</label>
                                <input onChange={(a) => setemail(a.target.value)} type="text" id="email" placeholder="Email address" required="" />
                            </div>
                            <div className="register-field register-field-wide">
                                <label htmlFor="register-password">Password</label>
                                <input onChange={(a) => setpassword(a.target.value)} type="password" id="register-password" placeholder="Create a password" required="" />
                            </div>
                        </div>
                        <button className="register-submit" type="button" onClick={signin}>Create Account <span>→</span></button>
                        <div className="register-divider"><span>Already have an account?</span></div>
                        <a href="/" className="register-login">Sign in</a>
                    </form>
                </div>
            </div>
        </section>
    )
}