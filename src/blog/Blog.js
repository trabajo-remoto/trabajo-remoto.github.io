import React from "react"
import PropTypes from "prop-types";

import { Flex } from 'reflexbox'

import BlogCard from "../components/BlogCard"

const Blog = props => {
  const { posts } = props;
  return (
      <Flex flexWrap='wrap'>
          {posts.map(post => {
            const {
              node,
              node: {
                fields: { slug }
              }
            } = post;
            console.log("POSITO", post)
            return <BlogCard key={ slug } post={ node } /> ;
          })}
      </Flex>
  )
}

Blog.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Blog