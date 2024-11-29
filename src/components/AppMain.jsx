import { useGlobalContext } from "../GlobalContext/GlobalContext"


export default function AppMain() {
    //destrutturo movies dal GlobalContext
    const { movies } = useGlobalContext()

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

                            </li>
                        ))}

                    </ul>
                </div>
            </section>
        </div>
    )
}