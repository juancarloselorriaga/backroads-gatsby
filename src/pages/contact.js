import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout/layout.component"
import StyledHero from "../components/styled-hero/styled-hero.component"
import Contact from '../components/contact/contact.component'

const ContactPage = ({data}) => {
  return (
    <Layout>
      <StyledHero img={data.contactBcg.childImageSharp.fluid} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default ContactPage
