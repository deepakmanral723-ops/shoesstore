import { Route, Routes } from "react-router-dom"
import { Register } from "./register"
import { Login } from "./login"
import { Aboutus } from "./aboutus"
import { Contactus } from "./contactus"
import { Home } from "./homepage"
import { Login2 } from "./login2"
import { Catagory } from "./category"
import { Related } from "./related"

import { Productlist } from "./productslist"


export const Rout = () => {
    return (
        <Routes>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/about" element={<Aboutus />}></Route>
            <Route path="/contact" element={<Contactus />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login2" element={<Login2></Login2>}></Route>
            <Route path="/catagory" element={<Catagory></Catagory>}></Route>
            <Route path="/related" element={<Related></Related>}></Route>

            <Route path="/product" element={<Productlist></Productlist>}></Route>
        </Routes>
    )
}