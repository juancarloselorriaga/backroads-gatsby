import React, { useState } from "react"

import { FaAngleDown, FaAngleUp } from "react-icons/fa"

import styles from "./day.module.css"

const Day = ({ day, info }) => {
  const [showInfo, setShowInfo] = useState(false)

  const toggleInfo = () => {
    setShowInfo(showInfo => !showInfo)
  }

  return (
    <article className={styles.day}>
      <h4>
        {day}
        <button onClick={toggleInfo} className={styles.btn}>
          {
            showInfo
            ? <FaAngleUp />
            : <FaAngleDown />
          }
        </button>
      </h4>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Day
