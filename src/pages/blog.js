import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p className={styles.text}>
          This is our blog pageThis is our blog pageThis is our blog pageThis is
          our blog pageThis is our blog pageThis is our blog pageThis is our
          blog pageThis is our blog pageThis is our blog pageThis is our blog
          page
        </p>
      </div>
    </Layout>
  )
}

export default blog
