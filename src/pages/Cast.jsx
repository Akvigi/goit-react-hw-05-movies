import { getMovieCast } from 'API'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

const Cast = () => {
  const [castList, setCastList] = useState([])
  const {movieId} = useParams()
  
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const {data} = await getMovieCast(movieId)
        setCastList(data.cast)
        console.log(data.cast[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast()
  }, [movieId])
  

  return (
    <List>
      {castList.length !== 0 && castList.map(({ name, profile_path, id, character }) => (
        <Item key={id}>
          <Img width={100} src={`https://image.tmdb.org/t/p/w500${profile_path}`} loading = "lazy" alt={name} />
          <div>
            <h4>{name}</h4>
            <p>as {character}</p>
          </div>
        </Item>))}
    </List>
  )
}

// Cast.propTypes = {}

export default Cast

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 2% 5%;
`

const Item = styled.li`
  margin-right: 30px;
  display: flex;
  flex-direction: row;
`

const Img = styled.img`
  margin-right: 10px;
  padding-bottom: 10px;
`