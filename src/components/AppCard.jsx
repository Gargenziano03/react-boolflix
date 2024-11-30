import React from "react";

export default function AppCard() {
    const [Hovered, setHoveres] = useState(false);
    //bandire 
    const languageFlags = {
        en: 'gb',
        it: 'it',
        fr: 'fr',
        ja: 'jp',
    }
    return (
        <div className="card-container">
            <div className="card-content">
                <h3>titolo</h3>
                <img src="" alt="" />
                <div className="card-info"></div>
            </div>
        </div>
    )
}