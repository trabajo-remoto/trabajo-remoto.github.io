import React from "react"

import ProductList from "../../containers/productList"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

var links = [
  'https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=trabajoremoto-21&m=amazon&o=30&p=8&l=as1&IS2=1&asins=B012C0SG6U&linkId=38de765d490abbd7075978f14aac2ebb&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
  'https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=trabajoremoto-21&m=amazon&o=30&p=8&l=as1&IS2=1&asins=B079F5Z3RN&linkId=19407876bd20b28d838e1b131397b56b&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
  'https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=trabajoremoto-21&m=amazon&o=30&p=8&l=as1&IS2=1&asins=B073NTCT4R&linkId=d7b0ccadd73eced86874ab7852d58001&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
  'https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=trabajoremoto-21&m=amazon&o=30&p=8&l=as1&IS2=1&asins=B0178A0KU4&linkId=5d8d58ca45605c7a5fd01414d89e6a73&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
  'https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=trabajoremoto-21&m=amazon&o=30&p=8&l=as1&IS2=1&asins=B06X3W3YQD&linkId=d02a29efec559a77565641ac239d2242&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
  'https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=trabajoremoto-21&m=amazon&o=30&p=8&l=as1&IS2=1&asins=B07H3PJHZ8&linkId=04dbfb15b75c00e342ad6095f4073b0b&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
  '',
]


const BasicPage = () => (
  <Layout>
  <SEO title="Set escritorio básico" />
  <h1>Set básico</h1>
  <p>Lo mínimo que se necesita para montar una escritorio en casa</p>

  <ProductList links={links}></ProductList>

  </Layout>
)

export default BasicPage