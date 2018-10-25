import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 115px;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FooterText = styled.div`
  font-size: 16px;
`

const StyledLink = styled.a`
  text-decoration: none;
`

const Year = new Date().getFullYear()

const Footer = () => {
  return (
    <Container>
      <FooterText>
        {`©${Year} · Powered by `}
        <StyledLink href="https://gatsbyjs.org" target="_blank">
          Gatsby
        </StyledLink>
      </FooterText>
    </Container>
  )
}

export default Footer
