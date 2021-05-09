import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VolumeCalcul from "../components/volume/VolumeCalcul"

const volume = () => {
  return (
    <Layout>
      <SEO title="Calculateur de volume" />
      <h1 className="pageTwo__title">VOLUME</h1>

      <VolumeCalcul />
    </Layout>
  )
}

export default volume
