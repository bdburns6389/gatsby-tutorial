import React, { Fragment } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./layout.css"

const layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  )
}

export default layout
