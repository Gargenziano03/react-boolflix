import { useContext } from "react"
import { GlobalContext } from "../GlobalContext/GlobalContext"
import Search from "./Search"

export default function AppMain() {
    //destrutto movies dal GlobalContext
    const { movies } = useContext(GlobalContext)

    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-between">
                <h2>movie</h2>
                <Search />
            </div>

            <section>
                <div>
                    <ul className="movie-list">
                        {movies && movies.map((movie, index) => (
                            <li key={index} style={{ borderBottom: '1px solid black', marginBottom: '1rem' }}>
                                {movie.original_title} <br />
                                {movie.title} <br />
                                {movie.vote_average} <br />
                                {movie.original_language}

                            </li>
                        ))}

                    </ul>
                </div>
            </section>
        </div>
    )
}