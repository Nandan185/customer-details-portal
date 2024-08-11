import { useEffect, useState } from "react";
import { Photo } from "../types/photo.type";
import Toast from "./Common/Toast";

const Grid = () => {
  const [images, setImages] = useState<Photo[]>([]);
  const [toastVisible, setToastVisible] = useState(false);

  let interval: any;

  const fetchImages = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?count=9&client_id=${
          import.meta.env.VITE_APP_UNSPLASH_ACCESS_KEY
        }`
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      setToastVisible(true);
      clearInterval(interval);
      setTimeout(() => {
        setToastVisible(false);
      }, 10000);
    }
  };

  useEffect(() => {
    fetchImages();
    interval = setInterval(fetchImages, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="grid grid-rows-3  gap-3 mt-8"
        style={{ gridTemplateColumns: "repeat(3, 150px)" }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.urls?.small}
            alt={image?.alt_description}
            className="object-fit rounded-lg shadow w-[150px] h-[150px]"
          />
        ))}
      </div>
      <Toast
        message="Unsplash API failed to load images because fetch limit exceded. Please try again after an hour."
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </>
  );
};

export default Grid;
