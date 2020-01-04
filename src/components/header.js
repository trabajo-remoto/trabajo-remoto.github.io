import React from 'react'
import PropTypes from "prop-types";

import Link from 'gatsby-link'
import {
    Header,
    Image,
    Menu,
    Container,
  } from 'semantic-ui-react'

import Favicon from '../images/favicon.png'

const header = ({ siteTitle, menuLinks }) => (
    <div>
        <Header>
            <Menu inverted>
            <Container>
                <Menu.Item as={ Link } to= '/' header>
                        <Image size='mini' src={ Favicon } style={{ marginRight: '1.5em' }} />
                        { siteTitle }
                </Menu.Item>
                {
                    menuLinks.map(menuLink => 
                    <Menu.Item as={Link} to = { menuLink.link }> { menuLink.name } </Menu.Item>
                )}
            </Container>
            </Menu>
        </Header>
    </div>
)

header.propTypes = {
  siteTitle: PropTypes.string,
}

header.defaultProps = {
  siteTitle: ``,
}

export default header