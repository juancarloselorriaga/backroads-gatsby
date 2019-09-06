import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout.component.jsx"

const Blog = () => {
  return (
    <Layout>
      Hello from blogs!
      <Link to="/">Back home</Link>
    </Layout>
  )
}

export default Blog
