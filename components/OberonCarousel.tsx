"use client";

import { useState, useEffect } from "react";

interface OberonCarouselProps {
  images: { src: string; caption?: string }[];
}

const CYCLE_MS = 4500;

export default function OberonCarousel({ images }: OberonCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <div className="oberon-carousel">
      <div className="oberon-carousel__frame">
        {images.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.caption || `Oberon image ${i + 1}`}
            className="oberon-carousel__image"
            style={{ opacity: i === index ? 1 : 0 }}
          />
        ))}
      </div>
    </div>
  );
}
