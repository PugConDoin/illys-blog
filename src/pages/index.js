import { graphql, Link as GatsbyLink } from 'gatsby'
import React from 'react'
import { Box, Heading, Link } from 'theme-ui'

export default function IndexPage({ data }) {
  return (
    <>
      {data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
        <Box
          key={id}
          as='article'
          sx={{
            mb: 4,
            p: 3,
            boxShadow: '0 5px 7px -2px rgba(0, 0, 0, 0.1)',
            borderRadius: '5px',
          }}
        >
          <Link as={GatsbyLink} to={`/${slug}`}>
            <Heading>{frontmatter.title}</Heading>
            <Box as='p' variant='styles.p'>
              {frontmatter.date}
            </Box>
            <Box as='p' variant='styles.p'>
              {excerpt}
            </Box>
          </Link>
        </Box>
      ))}
    </>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        slug
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYY MMM Do")
        }
      }
    }
  }
`
