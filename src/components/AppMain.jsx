import { useGlobalContext } from "../GlobalContext/GlobalContext"
import Flag from "react-world-flags"

export default function AppMain() {
    //otteniamo movies e seriesTv dal GlobalContext
    const { movies, seriesTv } = useGlobalContext()
    const languageFlags = {
        en: 'gb',
        it: 'it',
        fr: 'fr',
        ja: 'jp',
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
                                <img src={'https://image.tmdb.org/t/p/w154' + movie.poster_path} alt="" />
                                {movie.vote_average} <br />
                                {movie.original_language}
                                <Flag code={languageFlags[movie.original_language]} style={{ height: 15 }} />
                            </li>
                        ))}

                    </ul>

                    <ul className="movie-list">
                        {seriesTv && seriesTv.map((serie, index) => (
                            <li key={index} >
                                {serie.original_title} <br />
                                {serie.title} <br />
                                <img src={'https://image.tmdb.org/t/p/w154' + serie.poster_path} alt="" />
                                {serie.vote_average} <br />
                                {serie.original_language}
                                <Flag code={languageFlags[serie.original_language]} style={{ height: 15 }} />
                            </li>
                        ))}

                    </ul>

                </div>
            </section>
        </div>
    )
}