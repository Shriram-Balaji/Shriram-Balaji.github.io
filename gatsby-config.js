module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `space mono\:300, 500, 600, 900`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-tracking-id-here>",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Shriram Balaji',
    description: 'Software Engineer',
    keywords: 'full stack, product enginner, software engineer, developer, cisco, netapp, portfolio, personal website',
    url: 'https://www.shriram-balaji.github.io'
  }
};
