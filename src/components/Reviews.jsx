import { getMovieReviews } from 'API'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const {movieId} = useParams()
  useEffect(() => {
    const fetchTrend = async () => {
      try {
        const { data } = await getMovieReviews(movieId)
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      } 
    }
    fetchTrend()
  }, [movieId])
  
  return (
    <ul>
      <h1>Reviews</h1>
      {reviews.length !== 0 ? reviews.map(({ author, content, id }) => (<Item key={id}><h3>{author}</h3><p>{content}</p></Item>)) : <p>Havent reviews yet</p>}
    </ul>
  )
}

// Reviews.propTypes = {}

export default Reviews

const Item = styled.li`
  display: flex;
  flex-direction: column;
`