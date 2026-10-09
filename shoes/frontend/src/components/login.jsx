import { useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault()

        const result = await fetch("http://localhost:9000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })

        const response = await result.json()

        if (result.ok && response.statuscode === 1) {
            alert(response.msg)
        } else {
            alert(response.msg || "Login failed")
        }
    }

    return (
        <section className="login-page section-b-space">
            <div className="container">
                <h3>login</h3>
                <div className="theme-card">
                    <form className="theme-form" onSubmit={handleLogin}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-box">
                                    <label htmlFor="login-email" className="form-label">Email</label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        className="form-control"
                                        id="login-email"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-box">
                                    <label htmlFor="login-password" className="form-label">Password</label>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        className="form-control"
                                        id="login-password"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-solid w-auto">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
