import { useSelector } from "react-redux";

export default function SelectedPreview() {
  const selectedId = useSelector(s => s.gallery.selectedId);
  const images = useSelector(s => s.gallery.images);
  const img = images.find(i => i.id === selectedId);

  if (!img) return null;

  return (
    <div className="mt-4 p-4 border rounded shadow">
      <h3 className="font-semibold mb-2">{img.title}</h3>
      <img src={img.url} alt={img.title} className="w-full object-contain" />
    </div>
  );
}
