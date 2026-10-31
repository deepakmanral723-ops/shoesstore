import { createContext } from "react"

export const Context = createContext({
  userid: "",
  setuserid: () => {},
  email: "",
  setemail: () => {}
})