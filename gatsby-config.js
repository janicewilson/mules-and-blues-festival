module.exports = {
  siteMetadata: {
    siteUrl: `https://mulesandbluesfestival.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mules and Blues Festival`,
        short_name: `Mules and Blues`,
        start_url: `/`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },

    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
