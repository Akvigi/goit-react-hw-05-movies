import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '5924ceef083cd26964791f4e18444300'

export async function getMovies(query) {
    const movies = axios({
        method: "get",
        url: `search/movie?api_key=${API_KEY}&query=${query}`,
    })
    return movies
}

export async function getTrending() {
    const movies = axios.get(`movie/popular?api_key=${API_KEY}`)
    return movies
}

export async function getMovieByID(id) {
    const movie = axios.get(`movie/${id}?api_key=${API_KEY}`)
    return movie
}

export async function getMovieCast(id) {
    const data = axios.get(`movie/${id}/credits?api_key=${API_KEY}`)
    return data
}

export async function getMovieReviews(id) {
    const data = axios.get(`movie/${id}/reviews?api_key=${API_KEY}`)
    return data
}