import { useGlobalContext } from "../GlobalContext/GlobalContext"
import AppCard from "./AppCard"

export default function SeriesTv() {
    //otteniamo movies e seriesTv dal GlobalContext
    const { seriesTv } = useGlobalContext()

    return (
        <div>
            <ul className="movie-list">
                {seriesTv && seriesTv.map((serie, index) => (
                    <li key={index} >
                        <AppCard item={serie} />
                    </li>
                ))}

            </ul>
        </div>
    )
}