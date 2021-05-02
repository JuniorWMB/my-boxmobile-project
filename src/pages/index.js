import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FirstBlockHome from "../components/firstBlockHome/FirstBlockHome"
import SecondBlockHome from "../components/firstBlockHome/SecondBlockHome"
import ThirdBlockHome from "../components/firstBlockHome/ThirdBlockHome"
import FourBlockHome from "../components/firstBlockHome/FourBlockHome"
import FifthBlockHome from "../components/firstBlockHome/FifthBlockHome"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FirstBlockHome />
    <SecondBlockHome />
    <ThirdBlockHome />
    <FourBlockHome />
    <FifthBlockHome />

    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
  </Layout>
)

export default IndexPage
