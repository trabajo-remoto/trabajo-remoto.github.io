module.exports = {
  siteMetadata: {
    title: `trabajo-remoto.com`,
    siteUrl: `https://trabajo-remoto.com`,
    menuLinks: [
      {
        name:'Set Básico',
        link:'/sets/basicset/'
      },
      {
        name:'Set de oficina',
        link:'/sets/officeset/'
      },
      {
        name:'Set para jugar',
        link:'/sets/gamerset/'
      },
    ],
    description: `Consejos para trabajar en remoto`,
    author: `@migueloop, @albertoimpl`,
    pathPrefix: "/trabajo-remoto.github.io",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/blog/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `trabajo-remoto`,
        start_url: `/`,
        background_color: `#232f3e`,
        theme_color: `#232f3e`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-154710338-1",
      },
    },
    `gatsby-plugin-sitemap`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
