import React from "react"
import * as S from "./styled"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import getThemeColor from "../../utils/getThemeColor"
import propTypes from "prop-types"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && <AniLink to={prevPage} cover direction="left" bg={getThemeColor()} duration={0.6}>Página anterior</AniLink>}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && <AniLink to={nextPage} cover direction="right" bg={getThemeColor()} duration={0.6}>Próxima página</AniLink>}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
