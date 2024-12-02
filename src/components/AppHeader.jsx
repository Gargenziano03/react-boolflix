import Search from "./Search";
import Logo from "../../public/img/booflix.png"
export default function AppHeader() {
    return (
        <header>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <img src={Logo} alt="logo" />
                    <Search />
                </div>
            </div>
        </header>
    )
}