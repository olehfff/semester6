import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite, removeImage, selectImage } from "./gallerySlice";

export default function ImageCard({ img }) {
  const dispatch = useDispatch();
  const selectedId = useSelector(s => s.gallery.selectedId);
  const isSelected = selectedId === img.id;

  return (
    <div className={`rounded shadow relative ${isSelected ? "ring-4 ring-sky-300" : ""}`}>
      <img src={img.url} alt={img.title} className="w-full h-44 object-cover" />

      <div className="p-2 flex justify-between">
        <div>
          <div className="font-medium text-sm">{img.title}</div>
        </div>

        <div className="flex gap-2">
          <button onClick={() => dispatch(toggleFavorite(img.id))}>
            {img.favorite ? "★" : "☆"}
          </button>

          <button onClick={() => dispatch(selectImage(img.id))}>
            {isSelected ? "Зняти" : "Вибрати"}
          </button>

          <button className="text-red-600" onClick={() => dispatch(removeImage(img.id))}>
            Видалити
          </button>
        </div>
      </div>
    </div>
  );
}
