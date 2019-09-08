import React from "react"

import Title from "../title/title.component"

import Image from "../../assets/defaultBcg.jpeg"

import styles from "./about.module.css"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={Image} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            dignissim euismod scelerisque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            dignissim euismod scelerisque.
          </p>
          <button type='button' className='btn-primary'>read more</button>
        </article>
      </div>
    </section>
  )
}

export default About
