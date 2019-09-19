import React, { useState, useEffect } from "react"

import Tour from "../../tour/tour.component"
import Title from "../../title/title.component"

import styles from "../../Home/featured-tours/items.module.css"

const TourList = ({ tours }) => {
  // const [stateTours, setStateTours] = useState([])
  const [sortedTours, setSortedTours] = useState([])

  const { edges } = tours

  useEffect(() => {
    // setStateTours(edges)
    setSortedTours(edges)
  }, [edges])

  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours" />
      <div className={styles.center}>
        {sortedTours.map(({ node }) => {
          return <Tour key={node.contentful_id} tour={node} />
        })}
      </div>
    </section>
  )
}

export default TourList
