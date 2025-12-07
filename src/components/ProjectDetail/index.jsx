import './index.css';
import { useParams, Link } from 'react-router-dom';
import { individualProjects } from '../../data';
import { useState } from 'react';


export const ProjectDetail = () => {
  const { id } = useParams();                 
  const project = individualProjects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return (
      <div className='container-not-found'>
        <p>Project not found 😿</p>
        <Link to="/">Go back</Link>
      </div>
    );
  }

  const [lightboxImage, setLightboxImage] = useState(null)

return (
  <>
    <div className="project-detail">

      <div className="project-text">
        <h1>{project.name}</h1>
        <p>{project.longDescription}</p>
        <div className="project-buy">

          {project.buy && project.buy !== "" && (
            <a 
              href={project.buy} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              You can buy this here!
            </a>
          )}

        </div>

      </div>

      <div className='project-gallery'>
        <img 
          src={project.image}     
          alt={project.name} 
          onClick={() => setLightboxImage(project.image)}
          className='gallery-thumb'
        />

        {project.gallery && project.gallery.length > 0 && (
          <>
            {project.gallery.map((imgSrc, index) => (
              <img 
                key={index}
                src={imgSrc}
                alt={`${project.name}-obrazek${index + 1}`}
                onClick={() => setLightboxImage(imgSrc)}
                className='gallery-thumb'
              />
            ))}
          </>
        )}
      </div>

    </div>

    {lightboxImage && (
      <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
        <img 
          src={lightboxImage} 
          className="lightbox-image"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    )}

  </>

);

};