module.exports = {
  siteMetadata: {
    title: `Trabajo remoto`,
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
        icon: ``, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
