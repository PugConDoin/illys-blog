import React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'

function IndexPage() {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <h1>{title}</h1>
      <h1>{description}</h1>
    </>
  )
}

export default IndexPage
