import '../gallery.css'
import { IndividualGallery } from '../IndividualGallery';
import { individualProjects } from "../../data.js"
import { Link } from 'react-router-dom';

export const Random = () => {

    const randomProjects = individualProjects.filter(
        (project) => project.tags.includes("random")
    );

  return (

    <div className="gallery">
      {
        randomProjects.map((singleItem) => (
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

}

