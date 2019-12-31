import React from "react"
import { Link, graphql } from "gatsby"
import { Flex } from 'reflexbox'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCard from "../components/BlogCard"
import PaginateLink from "../components/PaginateLink"

const IndexPage = ({data, pathContext}) => {
  const { group, index, first, last } = pathContext
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString()
  const nextUrl = (index + 1).toString()
  const total = data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.templateKey === 'blog-post').length
  console.log(group)
  return (
    <Layout>
      <SEO title="Lista de sets" />
      <h1>Ergonomía en casa</h1>
      <p>Todo lo que necesitas para estudiar, trabajar o divertirte con consejos de profesionales</p>

      <Flex flexWrap='wrap'>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <BlogCard
              key={ node.id }
              path={ node.frontmatter.path }
              image={ node.frontmatter.image }
              title={ node.frontmatter.title }
              date ={ node.frontmatter.date }
              description={ node.frontmatter.title }
              />
          ))}
        {/* <div className="paginatation">
            <div className="previousLink">
                <PaginateLink tag={ first } url={ previousUrl } text="Prev" />
            </div>

            <p>{index} of { Math.ceil(total/12)}</p>

            <div className="nextLink">
                <PaginateLink tag={ last } url={ nextUrl } text="Next" />
            </div>

        </div> */}
      </Flex>

    </Layout>
  )
}

export default IndexPage


export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image
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