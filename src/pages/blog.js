import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

export default function Blog() {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>BLog page</h1>
        <p className={styles.text}>
          BLAH Lorem ipsum lblah blah just a bunch of nonsense thext that
          doesn't even mater to the point of this tutorial
        </p>
      </div>
    </Layout>
  )
}
