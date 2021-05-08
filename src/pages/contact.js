import React from "react"
import Contacts from "../components/contact/Contact"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Contacts />
    </Layout>
  )
}

export default Contact
