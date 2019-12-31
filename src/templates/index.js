import React from "react"
import { Link } from "gatsby"
import { Flex, Box } from 'reflexbox'

import Layout from "../components/layout"
import SEO from "../components/seo"

import basicImg from "../images/basic.jpg"
import gamerImg from "../images/gamer-office.jpg"
import homeImg from "../images/home-office.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Lista de sets" />
    <h1>Ergonomía en casa</h1>
    <p>Todo lo que necesitas para estudiar, trabajar o divertirte con consejos de profesionales</p>

     <Flex flexWrap='wrap'>
      <Box
        width={[ 1, 1/3 ]}
        p={3}>
        <Link to={'/sets/basicset'}>
          <img src={basicImg} alt="Basic"/>
        </Link>
      </Box>
      <Box
        width={[ 1, 1/3 ]}
        p={3}>
        <Link to={'/sets/officeset'}>
          <img src={homeImg} alt="Basic"/>
        </Link>
      </Box>
      <Box
        width={[ 1, 1/3 ]}
        p={3}>
        <Link to={'/sets/gamerset'}>
          <img src={gamerImg} alt="Basic"/>
        </Link>
      </Box>
    </Flex>

  </Layout>
)

export default IndexPage
