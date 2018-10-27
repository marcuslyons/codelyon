import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import propTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.header`
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: 400px;

  @media (max-width: 700px) {
    height: 200px;
  }
`

const InnerContainer = styled.div`
  background-color: rgba(34, 34, 34, 0.6);
  max-width: 960;
`

const HeaderLink = styled.h1`
  margin: 0;
`

const StyledLink = styled(Link)`
  font-size: 54px;
  color: white;
  text-decoration: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  @media (max-width: 700px) {
    font-size: 36px;
  }
`

const BgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 400px; // or whatever

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: cover !important; // or whatever
    object-position: 0% 0% !important; // or whatever
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;'; // needed for IE9+ polyfill
  }
`

const Header = ({ headerImage, siteTitle }) => (
  <Container>
    <InnerContainer>
      <HeaderLink>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </HeaderLink>
      <BgImage fluid={headerImage} />
    </InnerContainer>
  </Container>
)

Header.propTypes = {
  siteTitle: propTypes.string.isRequired,
}

export default Header
