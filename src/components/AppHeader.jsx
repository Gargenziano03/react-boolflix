import Search from "./Search";

export default function AppHeader() {
    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-between">
                <h2>movie</h2>
                <Search />
            </div>
        </div>
    )
}