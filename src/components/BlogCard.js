import React from 'react'
import Link from 'gatsby-link'
import { Box } from 'reflexbox'
import { Card, Icon, Image } from 'semantic-ui-react'

const BlogCard = ({ path, image, tag, title, date, description}) =>
    <Box
        width={[ 1, 1/3 ]}
        pt={3}
        key={path}>
         <Link className="post-card-content-link" to={ path }>
            <Card
                image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                header={ title }
                meta={ tag }
                description={ description }
            />
        </Link>
    </Box>

export default BlogCard