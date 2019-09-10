import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//GraphQL query example

const getSiteData = graphql`
  query MetaData {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const Header = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(getSiteData)
  const { author, title } = siteMetadata

  return (
    <div>
      <h1>title: {title}</h1>
      <h1>author: {author}</h1>
    </div>
  )
}

export default Header
