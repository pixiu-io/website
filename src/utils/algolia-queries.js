// Algolia queries configuration
// Used by gatsby-plugin-algolia-search (production) and header.jsx (search indices)
// In development without Algolia credentials, we provide a placeholder indexName
// so the header search component doesn't crash.
const queries = [
  {
    query: `
      {
        allMdx(
          filter: { internal: { contentFilePath: { regex: "/posts/" } } }
        ) {
          nodes {
            id
            excerpt
            frontmatter {
              title
              path
              date
            }
            rawBody
          }
        }
      }
    `,
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME || 'posts',
    transformer: ({ data }) =>
      data.allMdx.nodes.map(({ id, excerpt, frontmatter, rawBody }) => ({
        objectID: id,
        title: frontmatter.title,
        path: frontmatter.path,
        date: frontmatter.date,
        excerpt,
        rawBody,
      })),
  },
];

module.exports = queries;
