import { useGlobalContext } from "../GlobalContext/GlobalContext"
import AppCard from "./AppCard"

export default function Movie() {
    //otteniamo movies e seriesTv dal GlobalContext
    const { movies, seriesTv } = useGlobalContext()

    return (
        <div>
            <ul className="movie-list">
                {movies && movies.map((movie, index) => (
                    <li key={index} >
                        <AppCard item={movie} />
                    </li>
                ))}
            </ul>
            <ul className="serie-list" >
                {seriesTv && seriesTv.map((serie, index) => (
                    <li key={index} >
                        <AppCard item={serie} />
                    </li>
                ))}

            </ul>
        </div>
    )
}