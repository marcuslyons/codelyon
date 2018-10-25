import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import github from '../../images/github.svg'
import linkedin from '../../images/linkedin.svg'
import twitter from '../../images/twitter.svg'

const Container = styled.aside`
  width: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
const InnerContainer = styled.div``
const Avatar = styled(Img)`
  border-radius: 50%;
`

const Name = styled.p`
  font-weight: bold;
  font-size: 14px;
`

const Location = styled.p`
  color: #979797;
  font-size: 12px;
`

const InfoContainer = styled.div`
  & > p {
    margin-bottom: 2.5px;
  }
`

const StyledList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding-top: 5px;
`

const StyledListItem = styled.li`
  list-style: none;
  width: 20px;
`

const Sidebar = ({ avatar, social }) => {
  return (
    <Container>
      <InnerContainer>
        <div>
          <Avatar fixed={avatar} />
        </div>
        <InfoContainer className="infoContainer">
          <Name>Marcus Lyons</Name>
          <Location>Boise, Idaho</Location>
        </InfoContainer>
        <StyledList className="social">
          <StyledListItem>
            <a href={social.github} target="_blank" rel="noopener noreferrer">
              <img src={github} alt="" />
            </a>
          </StyledListItem>
          <StyledListItem>
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="" />
            </a>
          </StyledListItem>
          <StyledListItem>
            <a href={social.twitter} target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="" />
            </a>
          </StyledListItem>
        </StyledList>
      </InnerContainer>
    </Container>
  )
}

export default Sidebar
