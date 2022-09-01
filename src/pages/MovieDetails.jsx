import { getMovieByID } from 'API'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
// import PropTypes from 'prop-types'
import { Outlet, useParams, Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const MovieDetails = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState({})
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await getMovieByID(movieId)
        setMovie(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchMovie()
  }, [movieId])

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

  const {title, poster_path, overview, genres, vote_average} = movie
  
  return (
    <div>
      <StyledLink to={backLinkHref}>Back</StyledLink>
      <Section>
        <div>
          <h1>{title}</h1>
          {poster_path ? <img width={340} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} /> :
            <h4>Poster is unknown</h4>}
        </div>
        
        <FilmDescription>
          <div>
            <h2>Overview</h2>
            <article>{overview}</article>
          </div>
          {vote_average ? <h2>Average rating: {vote_average.toFixed(1)}</h2> : <h3>Havent score yet</h3>}
          {genres ? (<List>
            <h2>Genres</h2>
            {genres.map(({ id, name }) => (<li key={id}>{name}</li>))}
          </List>) : <h2>Genres is unknown</h2>}

          <List>
            <h2>More info</h2>
            <Link to={`cast`} state={{from: backLinkHref}}>Cast</Link>
            <Link to={`reviews`} state={{from: backLinkHref}}>Reviews</Link>
          </List>
        </FilmDescription>
      </Section>
      
      <Outlet />      
    </div>
  )
}

// MovieDetails.propTypes = {}

export default MovieDetails

const StyledLink = styled(Link)`
  padding-left: 5%;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`
const Section = styled.section`
  display: flex;
  flex-direction: row;
  padding: 0 5%;
`

const FilmDescription = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 5%;
  flex-direction: column;
`