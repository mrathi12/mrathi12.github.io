import React from 'react'
import SocialButton from '../social-button'
import styles from '../../../css/hero-image.module.scss'
import Img  from 'gatsby-image';
import {StaticQuery, graphql} from 'gatsby'
const HeroImage = () =>(
    <StaticQuery
    query = {graphql`{
        allFile (filter: {name: {eq: "hero-image"}}){
          edges{
            node {
                childImageSharp{
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
          }
        }
      }
      `}
      render= {data => (
          <div className={styles.wrapper}>
            <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} className={styles.heroImage}/>
            <div className={styles.heroImageDiv}>
            <div className={styles.heroContent}>
             <h1 className={styles.heroText}> Mukul Rathi</h1>
            
            <SocialButton href="https://www.linkedin.com/in/mukul-rathi-17230014a/" img="linkedIn"/>
            <SocialButton href="http://github.com/mukul-rathi" img="github"/>
            </div>
            </div>
            </div>
    )}/>
)

export default HeroImage;

