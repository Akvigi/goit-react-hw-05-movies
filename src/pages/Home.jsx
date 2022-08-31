import { getTrending } from 'API'
import MovieList from 'components/MovieList'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// import PropTypes from 'prop-types'

const Home = () => {
  const [movies, setMovies] = useState([{title: "no film", id: "zero"}])
  const location = useLocation()
  useEffect(() => {
    const fetchTrend = async () => {
      try {
        const {data} = await getTrending()
        setMovies(data.results)
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrend()
  }, [])

      
  return (
    <MovieList title={"Trending today"} list={movies} from = {location} />
  )
}

// Home.propTypes = {}

export default Home