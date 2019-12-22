import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Lista de sets" />
    <h1>Sets predefinidos</h1>
    <p>Todo lo que necesitas para estudiar, trabajar o divertirte con consejos de profesionales</p>

    <Link to="/">Volver al inicio</Link>
  </Layout>
)

export default SecondPage
