import "../Gallery/gallery.css";
import { IndividualGallery } from '../IndividualGallery';
import projectsData from "../../data/projects.json";
import { Link } from 'react-router-dom';

export const Work = () => {

  const workProjects = projectsData.projects.filter(
    (project) => project.tags?.includes("work")
  );

  return (
    <div className="gallery">
      {workProjects.map((singleItem) => (
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
      ))}
    </div>
  );
}
