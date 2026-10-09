import { useState } from "react"

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
        <>
            <section class="login-page section-b-space">
                <div class="container">
                    <h3>create account</h3>
                    <div class="theme-card">
                        <form class="theme-form">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-box">
                                        <label for="email" class="form-label">First Name</label>
                                        <input onChange={(a) => setfirstname(a.target.value)} type="text" class="form-control" id="fname" placeholder="First Name" required="" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-box">
                                        <label for="review" class="form-label">Last Name</label>
                                        <input onChange={(a) => setlastname(a.target.value)} type="text" class="form-control" id="lname" placeholder="Last Name" required="" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-box">
                                        <label for="email" class="form-label">email</label>
                                        <input onChange={(a) => setemail(a.target.value)} type="text" class="form-control" id="email" placeholder="Email" required="" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-box">
                                        <label for="review" class="form-label">Password</label>
                                        <input onChange={(a) => setpassword(a.target.value)} type="password" class="form-control" id="review" placeholder="Enter your password" required="" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button className="loginbtn" onClick={signin}> create Account</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


        </>
    )
}