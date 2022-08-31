import { getMovies } from 'API'
import MovieList from 'components/MovieList'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useLocation, useSearchParams} from 'react-router-dom'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

const Movies = () => {
  const [list, setList] = useState([])
  const [search, setSearch] = useState(``)
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('search') ?? ''
  const location = useLocation()

  useEffect(() => {
    const getMoviesIfSearch = async () => {
      if (query) {
        try {
          const { data } = await getMovies(query)
          setList(data.results)
        } catch (error) {
          console.log(error)
        }
      }
    }
    getMoviesIfSearch()
  }, [query])
  
  const searchMovies = async (e) => {
    e.preventDefault()
    setSearchParams({search: `${search}`})
  }

  return (
    <>
      <Form action="submit" onSubmit={(e) => searchMovies(e)}>
        <Input
         value={search} type="text" onChange={(e) => setSearch(e.target.value.trim())} />
        <Btn type="submit">search</Btn>
      </Form>
      {list.length !== 0 && <MovieList title={"Founded"} list={list} from={location} />}
    </>
  )
}

// Movies.propTypes = {}

export default Movies

const Form = styled.form`
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  width: 40%;
`

const Btn = styled.button`
  padding: 5px;
  margin-top: 10px;
`