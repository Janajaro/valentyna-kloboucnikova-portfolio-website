import './index.css';
import about from "../../data/about.json"

export const About = () => {
    return (
        <>
            <div className="container">
                <div>{about.text}</div>
                {about.image && <img src={about.image} alt={about.imageAlt || ""}></img>}
            </div>
        </>
    )
}