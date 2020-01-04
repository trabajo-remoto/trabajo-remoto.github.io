import React from 'react'
import PropTypes from "prop-types";

import Link from 'gatsby-link'
import Img from "gatsby-image"
import { Box } from 'reflexbox'
import { Item, Grid, Image, Icon, Button} from 'semantic-ui-react'


const BlogItem = props => {
    const {
        post: {
          excerpt,
          fields: { slug },
          frontmatter: {
            title,
            description,
            featuredImage: { childImageSharp: { fluid } },
            path
          }
        }
      } = props;

    return (
        <Item className='blog-item'>
            <Item.Image size='small' src={ fluid.src } />
            <Item.Content>
                <Item.Header as='a'>
                    <Link to={ path }> { title } </Link>
                </Item.Header>
                <Item.Content content={ excerpt } verticalAlign='middle' />
            </Item.Content>
        </Item>
    )
}

BlogItem.propTypes = {
    post: PropTypes.object.isRequired,
};

export default BlogItem