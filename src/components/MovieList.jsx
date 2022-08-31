import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const MovieList = ({ title, list = [], from }) => {
  return (
    <div>
        <h1>{title}</h1>
        <ul>
          {list.length !== 0 && list.map(({title, id}) => (<li key={id}><Link to={`/movies/${id}`} state={{from: from}}>{title}</Link></li>)) }
        </ul>
    </div>
  )
}

// MovieList.propTypes = {}

export default MovieList