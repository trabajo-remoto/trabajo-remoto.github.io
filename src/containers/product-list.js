import React from "react"
import { Flex, Box } from 'reflexbox'

import "./product-list.css"

class ProductList extends React.Component {
    constructor() {
      super();
      this.state = {links: ""};
    }
    render() {
        return (
            <Flex flexWrap='wrap'>
            {
                this.props.links.map((link, id) =>
                <Box
                width={[ 1, 1/4 ]}
                p={3}>
                    <iframe style={{
                        width: `120px`,
                        height: '240px',
                        }}
                        marginWidth={0}
                        marginHeight={0}
                        scrolling={"no"}
                        frameBorder={0}
                        src={link}
                        key={id}
                        >
                    </iframe>
                </Box>
            )
            }
        </Flex>
        )
    }
  }

export default ProductList;