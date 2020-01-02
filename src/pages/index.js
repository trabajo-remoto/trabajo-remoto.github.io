import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Blog from "../blog"

class IndexPage extends React.Component {
  render() {
    const {
      data: {
        posts: { edges: posts = [] },
      }
    } = this.props;
    console.log("POSTS", posts)
    return(
      <Layout>
      <SEO title="List de sets" />
      <h1>Ergonomía en casa</h1>
      <p>Todo lo que necesitas para estudiar, trabajar o divertirte con consejos de profesionales</p>

        <Blog posts={posts}/>
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  src
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(pruneLength: 40)
        }
      }
    }
  }
`

