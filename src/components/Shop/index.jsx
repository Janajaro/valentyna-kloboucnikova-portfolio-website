import "../Gallery/gallery.css";
import { IndividualGallery } from '../IndividualGallery';
import { individualProjects } from "../../data.js"

export const Shop = () => {
  const shopProjects = individualProjects.filter(
    (item) => typeof item.buy === "string" && item.buy.trim() !== ""
  );

  return (
    <div className="gallery">
      {shopProjects.map((singleItem) => (
        <a
          href={singleItem.buy.trim()}
          target="_blank"
          rel="noopener noreferrer"
          key={singleItem.id}
        >
          <IndividualGallery
            img={singleItem.image}
            shrtDesc={singleItem.shortDescription}
          />
        </a>
      ))}
    </div>
  );
};
