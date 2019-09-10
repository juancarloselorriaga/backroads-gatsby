import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        const { title, author } = data.site.siteMetadata
        return (
          <div>
            <h2>title: {title}</h2>
            <h2>author: {author}</h2>
          </div>
        )
      }}
    ></StaticQuery>
  )
}

export default RegularHeader
