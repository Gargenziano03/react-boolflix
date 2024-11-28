import React from "react"
import { useContext } from "react"
import { GlobalContext } from "../GlobalContext/GlobalContext.jsx"

export default function AppMain() {
    const { movies, fetchData } = useContext(GlobalContext)

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {movies && <ul><li>{movies}</li></ul>}
        </div>
    )
}