import { useGlobalContext } from "../GlobalContext/GlobalContext"


export default function Search() {
    const { search, setSearch, handleSearchForm } = useGlobalContext()

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