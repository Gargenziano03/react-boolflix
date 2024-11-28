import { useContext, useEffect } from "react"
import { GlobalContext } from "../GlobalContext/GlobalContext"

export default function AppMain() {
    const { movies, fetchData } = useContext(GlobalContext)

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li> // Mostro solo il titolo del film
                ))}
            </ul>
        </div>
    )
}