import { useSelector } from "react-redux";
import ImageCard from "./ImageCard";

export default function GalleryGrid() {
  const images = useSelector(s => s.gallery.images);

  if (!images.length) return (
    <div className="text-gray-500 text-center">
      Галерея порожня
    </div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map(img => <ImageCard key={img.id} img={img} />)}
    </div>
  );
}

