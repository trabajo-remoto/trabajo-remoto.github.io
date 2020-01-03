import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Grid } from 'semantic-ui-react'

import Blog from "../blog"

class IndexPage extends React.Component {
  render() {
    const {
      data: {
        posts: { edges: posts = [] },
      }
    } = this.props;

    return(
      <Layout>
      <SEO title="trabajo-remoto.com" />
        <Grid stackable doubling divider='vertically'>
          <Grid.Row columns={2}>
            <Blog posts={posts.slice(0, 2)} view='Item'/>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Blog posts={posts.slice(2, posts.length)} view='Card'/>
          </Grid.Row>
        </Grid>
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
          excerpt(pruneLength: 150)
        }
      }
    }
  }
`

