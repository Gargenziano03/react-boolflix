
import Movie from "./Movie"
import SeriesTv from "./SeriesTv"

export default function AppMain() {

    return (
        <div className="container">
            <section>
                <Movie />
            </section>
            <section>
                <SeriesTv />
            </section>
        </div>
    )
}