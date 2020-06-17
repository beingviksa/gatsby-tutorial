import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => data.site.info.description}
  ></StaticQuery>
)

export default ComponentName
