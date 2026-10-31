import { useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { Rout } from './components/route'
import { useEffect } from 'react'
import { Context } from './components/context'
import { Footer } from './components/footer'
import { Adminheader } from './components/headeradmin'

function App() {
  const [userid, setuserid] = useState("")
  const [email, setemail] = useState("")
  const [utype, setutype] = useState("")



  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("keyname"))
    if (info) {
      const parts = info.split(".")
      if (parts.length === 3) {
        const payload = parts[1]
        const enc = payload.replace(/-/g, '+').replace(/_/g, '/')
        const str = atob(enc)
        const decode = JSON.parse(str)
        setuserid(decode.id)
        setemail(decode.email)
        setutype(decode.utype)
        console.log(decode.id)
        console.log(decode.email)
      }
    }
  }, [])


  return (
    <div className="app-shell">
      {
        utype === "Admin" ? <Adminheader></Adminheader> : <Header></Header>
      }
      <Context.Provider value={{ setuserid, userid, setemail, email, utype, setutype }}>

        <Rout></Rout>
      </Context.Provider>

      <Footer />

    </div>
  )
}

export default App