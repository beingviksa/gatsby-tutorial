import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        author
        description
        data
        title
        person {
          age
          name
        }
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      info: {
        person: { name, age },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <h2>Name: {data.site.siteMetadata.person.name}</h2>
      <h2>Age: {data.site.siteMetadata.person.age}</h2> */}
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  )
}

export default Header
