import { useState } from "react";
import Flag from "react-world-flags";
export default function AppCard({ item }) {
    const [hovered, setHovered] = useState(false);
    //bandire 
    const languageFlags = {
        en: 'gb',
        it: 'it',
        fr: 'fr',
        ja: 'jp',
    }

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);
    return (

        <div className="card-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card-content">
                <h3>{item.title || item.name}</h3>
                {hovered && (
                    <div className="card-info" style={{
                        position: 'absolute',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        color: 'white',
                        padding: '10px',
                        borderRadius: '5px',
                        zIndex: 1
                    }}>
                        <p><strong>Rating:</strong> {item.vote_average}</p>
                        <p><strong>Original Language:</strong> {item.original_language}</p>
                        {item.original_language && (
                            <Flag code={languageFlags[item.original_language]} style={{ height: 15 }} />
                        )}
                        <p><strong>Overview:</strong> {item.overview}</p>
                    </div>
                )}
                <img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} alt={item.title || item.name} />
            </div>
        </div>
    )
}
