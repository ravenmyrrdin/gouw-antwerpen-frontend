module.exports = {
  siteMetadata: {
    title: "Gouw Antwerpen",
    description: "Dit is de website van Gouw Antwerpen van Scouts en Gidsen Vlaanderen",
    author: "RavenMyrrdin",
    siteUrl: "https://www.gouwantwerpen.be",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /**
         * De volledige URL van je Headless WordPress site's GraphQL API.
         * Voorbeeld : "https://www.example-site.com/graphql"
         */
        url: "http://website-gouw-antwerpen.local/graphql",
        schema: {
          timeout: 120000, 
        },
      },
    },
  ],
};