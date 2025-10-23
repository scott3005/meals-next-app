"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// import classes from "./image-slideshow.module.css";

const images = [
  {
    image: "https://picsum.photos/id/16/200",
    alt: "A delicious, juicy burger",
  },
  {
    image: "https://picsum.photos/id/17/200",
    alt: "A delicious, spicy curry",
  },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden flex flex-row  relative">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          width={200}
          height={200}
          style={
            index === currentImageIndex
              ? {
                  opacity: "1",
                  zIndex: "1",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: "translateX(0) scale(1.1)",
                  position: "absolute",
                  left: "0",
                }
              : {
                  opacity: "0",
                  display: "hidden",
                  width: "100%",
                  height: "100%",
                  transform: "translateX(-1rem) scale(1) rotate(-5deg)",
                  objectFit: "cover",
                }
          }
          // className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
