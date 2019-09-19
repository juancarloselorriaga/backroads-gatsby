import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import propTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { FaMap } from "react-icons/fa"
import styles from "./tour.module.css"

// Query para llamar a una imagen default desde el sistema de archivos
const getDefaultImage = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Tour = ({ tour }) => {
  const { file } = useStaticQuery(getDefaultImage)
  const img = file.childImageSharp.fluid
  const { name, price, country, days, slug, images } = tour

  //En caso de que la imagen no exista, se le asigna una imagen por default
  let mainImage = images ? images[0].fluid : img

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single tour" />
        <AniLink fade className={styles.link} to={`/tours/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3> {name} </h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country || "without information"}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

// Doble validación de props
Tour.propTypes = {
  tour: propTypes.shape({
    name: propTypes.string.isRequired,
    country: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    days: propTypes.number.isRequired,
    images: propTypes.arrayOf(propTypes.object).isRequired,
  }),
}

export default Tour
