import { graphql, useStaticQuery } from 'gatsby';
import { useMemo, useState } from 'react';

// Fetch all blog posts for client-side search/filtering
// Returns an array of post objects
const useAllPostsSearch = () => {
  const { allMdx } = useStaticQuery(graphql`
    query AllPostsForSearch {
      allMdx(
        filter: { internal: { contentFilePath: { regex: "/posts/" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
            categories
            ogSummary
            externalUrl
            ogImage {
              childImageSharp {
                gatsbyImageData(width: 642)
              }
            }
          }
        }
      }
    }
  `);

  const allPosts = useMemo(() => {
    if (!allMdx || !allMdx.nodes) return [];
    return allMdx.nodes.map((node) => ({
      ...node.frontmatter,
    }));
  }, [allMdx]);

  return allPosts;
};

export default useAllPostsSearch;
