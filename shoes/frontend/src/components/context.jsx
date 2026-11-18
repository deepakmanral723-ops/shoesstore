import { createContext } from "react"

export const Context = createContext({
  userid: "",
  setuserid: () => {},
  email: "",
  setemail: () => {},
  cartRevision: 0,
  setCartRevision: () => {}
})