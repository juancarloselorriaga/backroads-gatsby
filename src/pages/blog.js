import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout.component"
import StyledHero from "../components/styled-hero/styled-hero.component"

const Blog = ({data}) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid}/>
    </Layout>
  )
}

export const query = graphql`
  {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Blog;
