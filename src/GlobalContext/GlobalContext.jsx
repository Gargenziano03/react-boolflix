import { createContext } from "react";
import { useState } from "react";
import AppMain from "../components/AppMain";

const GlobalContext = createContext();

const myProvider = ({ children }) => {
    const [movies, setMovies] = useState({});

    function fetchData(url = 'https://api.themoviedb.org/3/search/movie?api_key=46b26adf1f6f07f0576248db35115069&query=spider-man') {
        fetch(url)
            .then(resp => resp.json())
            .then(response => {
                const results = response.results
                setMovies(results)
            })
    }

    return (
        <>
            <GlobalContext.Provider value={{ movies, fetchData }}>
                {<AppMain />}
            </GlobalContext.Provider>
        </>
    )
}
export default myProvider
