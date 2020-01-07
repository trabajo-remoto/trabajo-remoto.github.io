import React from "react"

import ProductList from "../../containers/product-list"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

var links = [
  'https://www.amazon.es/gp/product/B07STTWHPL/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B07STTWHPL&linkCode=as2&tag=tremoto-21&linkId=cb891ac82a3b7d41edcf00d071d27b45',
  'https://www.amazon.es/gp/product/B07Y614WRS/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B07Y614WRS&linkCode=as2&tag=tremoto-21&linkId=d86027d5236a24e4f396845627fb72e0'
]


const OfficePage = () => (
  <Layout>
  <SEO title="Set para trabajar desde casa" />
  <h1>Otras cosas que te podrían interesar</h1>

  <ProductList links={links}></ProductList>

  </Layout>
)

export default OfficePage