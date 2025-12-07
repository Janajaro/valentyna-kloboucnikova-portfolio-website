import './index.css'

export const IndividualGallery = ({ img, shrtDesc }) => {
    return (
            <div className="image-wrapper">
                <img src={img} />
                <div className="img-txt">{shrtDesc}</div>
            </div>            
    )
}