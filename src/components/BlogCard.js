import React from 'react'
import PropTypes from "prop-types";

import Link from 'gatsby-link'
import Img from "gatsby-image"
import { Box } from 'reflexbox'
import { Card } from 'semantic-ui-react'


const BlogCard = props => {
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
        <Link className="blogCard" to={ path }>
            <Card fluid
                image={ fluid.src }
                header={ title }
                description={ excerpt }
            />
        </Link>
    )
}

BlogCard.propTypes = {
    post: PropTypes.object.isRequired,
};

export default BlogCard