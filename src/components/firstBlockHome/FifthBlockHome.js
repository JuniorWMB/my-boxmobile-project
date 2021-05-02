import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const FifthBlockHome = () => {
  const { backgroundImageOne, backgroundImageTwo } = useStaticQuery(
    graphql`
      query {
        backgroundImageOne: file(relativePath: { eq: "people.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 300
              quality: 50
              placeholder: BLURRED
              webpOptions: { quality: 80 }
            )
          }
        }
        backgroundImageTwo: file(relativePath: { eq: "box.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 300
              quality: 50
              placeholder: BLURRED
              webpOptions: { quality: 90 }
            )
          }
        }
      }
    `
  )
  const pluginImage = getImage(backgroundImageOne)
  const pluginImageTwo = getImage(backgroundImageTwo)
  return (
    <div className="fifthBlockHome__contain">
      <div className="fifthBlockHome__particulier">
        <BgImage image={pluginImageTwo}></BgImage>
        <p>Qui sommes nous ?</p>
      </div>
      <div className="fifthBlockHome__entreprise">
        <BgImage image={pluginImage}></BgImage>
        <p>Contacts</p>
      </div>
    </div>
  )
}

export default FifthBlockHome
