import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout.component"
import SimpleHero from "../components/simple-hero/simple-hero.component"
import Banner from "../components/banner/banner.component.jsx"
import About from "../components/about/about.component"
import Services from '../components/services/services.component'

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="continue exploring"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id."
      >
        <Link to="/tours" className="btn-white">
          Explore tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)
