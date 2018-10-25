import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Article = styled.article`
  padding-bottom: 60px;
  margin-bottom: 60px;
  border-bottom: 1px solid #ececec;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #222222;
  :hover {
    color: #a2a2a2;
  }
`

const Date = styled.h5`
  color: #a2a2a2;
`

const PostPreview = () => (
  <StaticQuery
    query={graphql`
      {
        posts: allMarkdownRemark(
          filter: { frontmatter: { draft: { ne: true } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              id
              html
              excerpt
              frontmatter {
                path
                title
                date(formatString: "YYYY.MM.DD")
                keywords
              }
            }
          }
        }
      }
    `}
    render={data =>
      data ? (
        data.posts.edges.map(({ node }) => (
          <Article className="blog-post-container" key={node.id}>
            <div className="blog-post">
              <h3>
                <StyledLink to={`${node.frontmatter.path}/`}>
                  {node.frontmatter.title}
                </StyledLink>
              </h3>
              <Date>{node.frontmatter.date}</Date>
              <p>{node.excerpt}</p>
            </div>
          </Article>
        ))
      ) : (
        <div>No posts to show</div>
      )
    }
  />
)

export default PostPreview
