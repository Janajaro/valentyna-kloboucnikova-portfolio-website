import "../Gallery/gallery.css";
import { IndividualGallery } from '../IndividualGallery';
import { individualProjects } from "../../data.js"
import { Link } from 'react-router-dom';


export const Gallery = () => {

  return (

    <div className="gallery">
      {
        individualProjects.map((singleItem) => (
          <Link
            to={`/${singleItem.id}`}
            key={singleItem.id}
          >

            <IndividualGallery
              key={singleItem.id}
              img={singleItem.image}
              shrtDesc={singleItem.shortDescription}
              />

          </Link>
        ))
      }
    </div>

  );

};
