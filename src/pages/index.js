import React from "react"
import Layout from "../components/layout"
import { ExampleButton } from "../components/Button"

export default function Home() {
  return (
    <Layout>
      Hello Brian!
      <div></div>
      <div>
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
      <ExampleButton>CLick me</ExampleButton>
    </Layout>
  )
}
