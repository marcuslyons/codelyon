const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/post.js`)

  return new Promise((resolve, reject) => {
    graphql(`
      {
        posts: allMarkdownRemark(
          filter: { frontmatter: { draft: { ne: true } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              html
              frontmatter {
                path
                title
                date
                keywords
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.posts.edges.map(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {}, // additional data can be passed via context
        })
      })
    })
    resolve()
  })
}
