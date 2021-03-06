import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout/layout.component"
import StyledHero from "../components/styled-hero/styled-hero.component"
import Banner from "../components/banner/banner.component.jsx"
import About from "../components/Home/about/about.component"
import Services from "../components/Home/services/services.component"
import FeaturedTours from '../components/Home/featured-tours/featured-tours.component'
import SEO from '../components/SEO/SEO.component'

export default ({ data }) => (
  <Layout>
    <SEO title="Home"/>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="continue exploring"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id."
      >
        <AniLink paintDrip
        hex="#3fd0d4"
        to="/tours"
        duration={1} className="btn-white">
          Explore tours
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedTours />
  </Layout>
)

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
