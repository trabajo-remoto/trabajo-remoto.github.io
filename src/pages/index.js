import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import basicImg from "../images/basic.jpg"
import gamerImg from "../images/gamer-office.jpg"
import homeImg from "../images/home-office.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Lista de sets" />
    <h1>Sets predefinidos</h1>
    <p>Todo lo que necesitas para estudiar, trabajar o divertirte con consejos de profesionales</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Link to={'/sets/basicset'}>
      <img src={basicImg} alt="Basic"/>
    </Link>

    <Link to={'/sets/officeset'}>
      <img src={homeImg} alt="Basic"/>
    </Link>

    <Link to={'/sets/gamerset'}>
      <img src={gamerImg} alt="Basic"/>
    </Link>

    </div>
  </Layout>
)

export default IndexPage
