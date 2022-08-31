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

  const {title, poster_path, overview} = movie
  
  return (
    <div>
      <Link to = {backLinkHref}>Back</Link>
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <p>{overview}</p>
      <List>
        <Link to={`cast`}>Cast</Link>
        <Link to={`reviews`}>Reviews</Link>
      </List>
      <Outlet />      
    </div>
  )
}

// MovieDetails.propTypes = {}

export default MovieDetails

const List = styled.ul`
  display: flex;
  flex-direction: column;
`