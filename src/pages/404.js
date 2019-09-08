import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout.component"
import Banner from "../components/banner/banner.component"

import styles from "../components/error/error.module.css"

const Error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <Link to="/" className="btn-white">
            Back to homepage
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default Error
