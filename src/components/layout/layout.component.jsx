import React from "react"

import Navbar from "../navbar/navbar.component"
import Footer from "../footer/footer.component"

import "./layout.global-styles.css"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
