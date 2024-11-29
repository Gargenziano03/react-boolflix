import { createContext, useState, useEffect } from "react";
const GlobalContext = createContext();

//Definiamo il provider del contesto, che avvolgerà i componenti figli
const MyProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('')

    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
    const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search}`;

    //caricare i film di tendenza quando il componente è montato
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`)
            .then((res) => res.json())
            .then(({ results }) => {
                console.log(results);

                setMovies(results);
            });

    }, [])

    return (
        <>
            {/*valori forniti ai componenti figli */}
            <GlobalContext.Provider value={{ movies, setMovies, setSearch, base_movies_api_url }}>
                {children}
            </GlobalContext.Provider>
        </>
    )
}
export { GlobalContext, MyProvider }
