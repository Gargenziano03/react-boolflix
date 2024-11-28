import { useState, useEffect } from "react"
export default function AppMain() {
    const [movies, setMovies] = useState([]);

    function fetchdata(url = 'https://api.themoviedb.org/3/search/movie?api_key=46b26adf1f6f07f0576248db35115069&query=spider-man') {
        fetch(url)
            .then(resp => resp.json())
            .then(response => {
                console.log(response.results)
                const results = response.results
                setMovies(results)
            })
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <div>
            <h2>movie</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.original_title}</li>
                ))}
            </ul>
        </div>
    )
}