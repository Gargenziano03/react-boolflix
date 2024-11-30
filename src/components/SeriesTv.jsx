import { useGlobalContext } from "../GlobalContext/GlobalContext"
import Flag from "react-world-flags"

export default function SeriesTv() {
    //otteniamo movies e seriesTv dal GlobalContext
    const { seriesTv } = useGlobalContext()
    const languageFlags = {
        en: 'gb',
        it: 'it',
        fr: 'fr',
        ja: 'jp',
    }
    return (
        <div>
            <ul className="movie-list">
                {seriesTv && seriesTv.map((serie, index) => (
                    <li key={index} >
                        {serie.original_title} <br />
                        {serie.title} <br />
                        <img src={'https://image.tmdb.org/t/p/w342' + serie.poster_path} alt="" />
                        {serie.vote_average} <br />
                        {serie.original_language}
                        <Flag code={languageFlags[serie.original_language]} style={{ height: 15 }} />
                    </li>
                ))}

            </ul>
        </div>
    )
}