import { useGlobalContext } from "../GlobalContext/GlobalContext"
import Flag from "react-world-flags"

export default function AppMain() {
    //destrutturo movies dal GlobalContext
    const { movies } = useGlobalContext()
    const languageFlags = {
        en: 'gb'
    }

    return (
        <div className="container">
            <section>
                <div>
                    <ul className="movie-list">
                        {movies && movies.map((movie, index) => (
                            <li key={index} >
                                {movie.original_title} <br />
                                {movie.title} <br />
                                {movie.vote_average} <br />
                                {movie.original_language}
                                <Flag code={languageFlags[movie.original_language]} style={{ height: 15 }} />
                            </li>
                        ))}

                    </ul>
                </div>
            </section>
        </div>
    )
}