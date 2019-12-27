import React from "react"

import ProductList from "../../containers/productList"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

var links = [
  'https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=trabajoremoto-21&m=amazon&o=30&p=8&l=as1&IS2=1&asins=B0798L6NRH&linkId=c2c045a72da261b7ac181d9dd4aaaaff&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
  'https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=trabajoremoto-21&m=amazon&o=30&p=8&l=as1&IS2=1&asins=B07SQQGV4L&linkId=a42988a7443fce83d4f08a215c5de4dd&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
  'https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=trabajoremoto-21&m=amazon&o=30&p=8&l=as1&IS2=1&asins=B073NTCT4R&linkId=d7b0ccadd73eced86874ab7852d58001&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
  'https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=trabajoremoto-21&m=amazon&o=30&p=8&l=as1&IS2=1&asins=B01L6L44NU&linkId=9699158147f0e6fc24707b669b21c750&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
  'https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=trabajoremoto-21&m=amazon&o=30&p=8&l=as1&IS2=1&asins=B00LFBEOUA&linkId=01bd7c147d127846c0aa62c685c50382&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
  'https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=trabajoremoto-21&m=amazon&o=30&p=8&l=as1&IS2=1&asins=B0798QSXMQ&linkId=515abf757c5dee6494c383c94bd3b706&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
  '',
]


const GamerPage = () => (
  <Layout>
  <SEO title="Set para gamers" />
  <h1>Set para gamers</h1>
  <p>Set simple para jugones</p>

  <ProductList links={links}></ProductList>

  </Layout>
)

export default GamerPage