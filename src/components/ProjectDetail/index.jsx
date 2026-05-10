import './index.css';
import { useParams, Link } from 'react-router-dom';
import { individualProjects } from '../../data';
import { useState } from 'react';

export const ProjectDetail = () => {
  const { id } = useParams();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const project = individualProjects.find(
    (item) => String(item.id) === String(id)
  );

  if (!project) {
    return (
      <div className="container-not-found">
        <p>Project not found 😿</p>
        <Link to="/">Go back</Link>
      </div>
    );
  }

  const allImages = [
    ...(project.image ? [project.image] : []),
    ...(project.gallery || []),
  ];

  const showPreviousImage = (e) => {
    e.stopPropagation();

    setLightboxIndex((currentIndex) =>
      currentIndex === 0 ? allImages.length - 1 : currentIndex - 1
    );
  };

  const showNextImage = (e) => {
    e.stopPropagation();

    setLightboxIndex((currentIndex) =>
      currentIndex === allImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <>
      <main className="project-detail">
        <section className="project-text">
          <h1>{project.name}</h1>
          <p>{project.longDescription}</p>

          {project.buy && (
            <a
              className="project-buy"
              href={project.buy}
              target="_blank"
              rel="noopener noreferrer"
            >
              You can buy this here!
            </a>
          )}
        </section>

        <section className="project-gallery">
          {allImages.map((imgSrc, index) => (
            <button
              key={index}
              className="gallery-item"
              onClick={() => setLightboxIndex(index)}
              type="button"
            >
              <img
                src={imgSrc}
                alt={`${project.name} image ${index + 1}`}
              />
            </button>
          ))}
        </section>
      </main>

      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setLightboxIndex(null)}
            type="button"
          >
            ×
          </button>

          <button
            className="lightbox-arrow lightbox-arrow-left"
            onClick={showPreviousImage}
            type="button"
          >
            ‹
          </button>

          <img
            src={allImages[lightboxIndex]}
            alt="Enlarged preview"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-arrow lightbox-arrow-right"
            onClick={showNextImage}
            type="button"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};