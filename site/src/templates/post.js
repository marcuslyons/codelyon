import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout/layout'

const Article = styled.article`
  padding-bottom: 60px;
  margin-bottom: 60px;
  border-bottom: 1px solid #ececec;
`
const Date = styled.h5`
  color: #a2a2a2;
`

const Page = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Article className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <Date>{frontmatter.date}</Date>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Article>
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        date: PropTypes.string,
        path: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }),
}

export default Page

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }, draft: { eq: false } }) {
      html
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        path
        title
      }
    }
  }
`
