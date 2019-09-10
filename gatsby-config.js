module.exports = {
  siteMetadata: {
    title: "BackRoads",
    description:
      "Explore awesome wordlwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure.",
    author: "@juancarloselorriaga",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`
  ],
}
