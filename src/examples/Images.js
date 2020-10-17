import React from 'react'
import { graphql, useStaticQuery }  from 'gatsby'
import img from '../images/synthwave_mountain.jpg'
import Image from 'gatsby-image'

const getImages = graphql`
{
    fixed: file(relativePath: {eq: "synthwave_mountain.jpg"}) {
      childImageSharp {
        fixed (width: 200, grayscale: true){
            ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "cows_in_field.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
    const data = useStaticQuery(getImages);
    console.log(data);
    return (
        <section className="images">
            <article className="single-image">
                <h3>basic image</h3>
                <img src={img} width="100%" alt=""/>
            </article>
            <article className="single-image">
                <Image fixed={data.fixed.childImageSharp.fixed} />
                <h3>fixed image</h3>
            </article>
            <article className="single-image">
                <Image fluid={data.fluid.childImageSharp.fluid} />
                <h3>fluid svg</h3>
            </article>
        </section>
    )
}

export default Images