import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const MovieList = ({ title, list = [], from }) => {
  return (
    <Container>
        <h1>{title}</h1>
        <List>
          {list.length !== 0 && list.map(({ title, id, poster_path }) => (<li key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: from }}>
              <img width={250} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
              <p>{title}</p>
            </StyledLink>
          </li>))}
        </List>
    </Container>
  )
}

// MovieList.propTypes = {}

export default MovieList

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`
const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`

const Container = styled.div`
  padding: 0 5%;
`