const siteMetadata = {
  title: `Illy Codes for Kids`,
  description: `Learn to code from Scratch!`,
}

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
  ],
}
