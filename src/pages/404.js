import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout/layout.component"
import Banner from "../components/banner/banner.component"

import styles from "../components/error/error.module.css"

const Error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <AniLink paintDrip hex="#3fd0d4" to="/" duration={1} className="btn-white">
            Back to homepage
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default Error
