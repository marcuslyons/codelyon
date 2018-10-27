import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'

import favicon from '../../images/favicon.ico'

const MainContainer = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 150px auto;
  margin-left: 5%;
  margin-right: 5%;
  max-width: 1100px;
  padding-top: 50px;

  @media (min-width: 1100px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column-reverse;
    margin-left: 15%;
    margin-right: 15%;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        SiteTitleQuery: site {
          siteMetadata {
            title
            headerTitle
          }
        }
        headerImage: file(relativePath: { eq: "minimal-tech-table.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        avatar: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(height: 128, width: 128) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        social: site {
          siteMetadata {
            social {
              github
              linkedin
              twitter
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.SiteTitleQuery.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            { name: 'title', content: 'codelyon' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header
          siteTitle={data.SiteTitleQuery.siteMetadata.headerTitle}
          headerImage={data.headerImage.childImageSharp.fluid}
        />
        <MainContainer>
          <Sidebar
            avatar={data.avatar.childImageSharp.fixed}
            social={data.social.siteMetadata.social}
          />
          {children}
        </MainContainer>
        <Footer />
      </>
    )}
  />
)

export default Layout
