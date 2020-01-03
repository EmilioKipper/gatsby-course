import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"
import getThemeColor from "../../utils/getThemeColor"
import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          position
          description
          title
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="/" cover direction="right" bg={getThemeColor()} duration={0.6}>
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

// const Profile = () => (
//   <StaticQuery
//     query={graphql`
//       query MySiteMetadata {
//         site {
//           siteMetadata {
//             position
//             description
//             title
//           }
//         }
//       }
//     `}
//     render={({
//       site: {
//         siteMetadata: { title, position, description },
//       },
//     }) => (
//       <div className="Profile-wrapper">
//         <h1>{title}</h1>
//         <h2>{position}</h2>
//         <p>{description}</p>
//       </div>
//     )}
//   />
// )

export default Profile
