import React from "react"
import PropTypes from "prop-types";

import BlogCard from "../components/BlogCard"
import BlogItem from "../components/BlogItem"

import { Item, Grid } from 'semantic-ui-react'

const Blog = props => {
  const { posts, view } = props;
  return posts.map(post => {
    const {
      node,
      node: {
        fields: { slug }
      }
    } = post;
      console.log("view", view)
      return (
        <Grid.Column>
        { view == 'Card' ?
            <BlogCard key={ slug } post={ node } />
          : <Item.Group>
              <BlogItem key={ slug } post={ node } />
            </Item.Group>
        }
        </Grid.Column>
        )
  })}


Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  view: PropTypes.array.isRequired
};

export default Blog