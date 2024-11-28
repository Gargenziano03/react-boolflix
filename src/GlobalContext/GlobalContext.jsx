import { createContext, useState } from "react";
const GlobalContext = createContext();

const MyProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    function fetchData(url = 'https://api.themoviedb.org/3/search/movie?api_key=46b26adf1f6f07f0576248db35115069&query=spider-man') {
        fetch(url)
            .then(resp => resp.json())
            .then(response => {
                const results = response.results
                setMovies(results)
            })
            .catch(error => console.error('Errore nel recupero dei dati:', error));
    }

    return (
        <>
            <GlobalContext.Provider value={{ movies, fetchData }}>
                {children}
            </GlobalContext.Provider>
        </>
    )
}
export { GlobalContext, MyProvider }
