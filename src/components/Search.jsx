import { useContext, useState } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext"


export default function Search() {
    const [search, setSearch] = useState('')
    const { base_movies_api_url, setMovies } = useContext(GlobalContext)

    // Funzione per gestire l'invio del modulo di ricerca
    function handleSearchForm(e) {
        e.preventDefault();
        console.log(base_movies_api_url);

        // Facciamo una richiesta API per cercare i film usando il termine di ricerca
        fetch(base_movies_api_url)
            .then((res) => res.json())
            .then(({ results }) => {
                console.log(results);
                setMovies(results);
            });
    }
    return (
        // Form di ricerca
        <form onSubmit={handleSearchForm}>
            <div className="mb-3">
                <input
                    type="search"
                    className="form-control"
                    name="searchText"
                    id="searchText"
                    aria-describedby="searchHelper"
                    placeholder="Search..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

        </form>
    )
}