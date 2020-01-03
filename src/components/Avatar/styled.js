import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  height: 3.75;
  margin: auto;
  width: 3.75;

  ${media.lessThan("large")`
    height: 1.875rem;
    width:1.875rem;
  `}
`
