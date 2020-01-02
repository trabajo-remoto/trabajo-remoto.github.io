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

    console.log(fluid)

    return (
        <Box
            width={[ 1, 1/2 ]}
            pt={3}
            key={path}>
            <Link className="post-card-content-link" to={ path }>
                <Card
                    image={ fluid.src }
                    header={ title }
                    description={ description }
                />
            </Link>
        </Box>
    )
}

BlogCard.propTypes = {
    post: PropTypes.object.isRequired,
};

export default BlogCard