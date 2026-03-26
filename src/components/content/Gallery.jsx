import { useEffect, useState } from "react";

export function Gallery({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current - 1 + images.length) % images.length);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images.length]);

  function showPrevious(event) {
    event.stopPropagation();
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  }

  function showNext(event) {
    event.stopPropagation();
    setActiveIndex((current) => (current + 1) % images.length);
  }

  return (
    <>
      <div className="gallery-grid" aria-label={title}>
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className="gallery-grid__item"
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => setActiveIndex(index)}
            aria-label={`Vergroot afbeelding ${index + 1} van ${images.length}`}
          />
        ))}
      </div>

      {activeImage ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--prev"
            onClick={showPrevious}
            aria-label="Vorige afbeelding"
          >
            &lsaquo;
          </button>

          <button
            type="button"
            className="gallery-lightbox__close"
            onClick={() => setActiveIndex(null)}
            aria-label="Sluit grote afbeelding"
          >
            Sluiten
          </button>

          <img
            className="gallery-lightbox__image"
            src={activeImage}
            alt=""
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--next"
            onClick={showNext}
            aria-label="Volgende afbeelding"
          >
            &rsaquo;
          </button>
        </div>
      ) : null}
    </>
  );
}
