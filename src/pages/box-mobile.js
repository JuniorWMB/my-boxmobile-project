import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FirstBlockPageTwo from "../components/pageTwo/firstBlockPageTwo"
import DeuceBlockPageTwo from "../components/pageTwo/deuceBlockPageTwo"
import ThirdBlockPageTwo from "../components/pageTwo/thirdBlockPageTwo"

const SecondPage = () => (
  <Layout>
    <SEO title="le box mobile c'est quoi" />
    <h1 className="pageTwo__title">Nos Box Mobile</h1>
    <FirstBlockPageTwo />
    <DeuceBlockPageTwo />
    <ThirdBlockPageTwo />
  </Layout>
)

export default SecondPage
