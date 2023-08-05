import remarkGfm from "remark-gfm"
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `Abort To Orbit`,
    siteUrl: `https://www.abort-to-orbit.com`,
    siteHeadline: `Abort To Orbit: Aviation, Space, Software, Dev & Technology Blog`,
    siteDescription: `Analyzing, discussing, and expressing opinions on aviation, especially aviation safety, space exploration, and software engineering with web development focus.`,
    author: `Michael E Stallings`,
    siteLanguage: `en`,
    siteImage: `/images/ss-ascent-abort-modes.jpg`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: true,
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/ato-favicon-1.png"
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
        ],
        extensions: [`.mdx`, `.md`],
        // mdxOptions: {  // This is exploding the build for some reason
        //   remarkPlugins: [remarkGfm]
        // },
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/images/`
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": `${__dirname}/src/pages/`
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "posts",
        "path": `${__dirname}/content/posts/`
      },
      __key: "posts"
    },
  ]
};

export default config;
