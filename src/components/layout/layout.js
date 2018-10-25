import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'

import favicon from '../../images/favicon.ico'

const MainContainer = styled.div`
  display: inline-grid;
  grid-template-columns: 25vw 60vw;
  margin: 0 auto;
  max-width: 100%;
  padding: 50px 1.0875rem 1.45rem;

  & > p {
    cursor: pointer;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        SiteTitleQuery: site {
          siteMetadata {
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
