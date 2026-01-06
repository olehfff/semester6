import { useState } from "react";
import { useDispatch } from "react-redux";
import { addImage } from "./gallerySlice";

export default function AddImageForm() {
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!url.trim()) return;
    dispatch(addImage({ url, title }));
    setUrl("");
    setTitle("");
  }

  return (
    <form onSubmit={submit} className="space-y-2">
      <div className="flex gap-2">
        <input
          className="flex-1 p-2 rounded border"
          placeholder="URL зображення"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <button className="px-4 py-2 bg-sky-600 text-white rounded">
          Додати
        </button>
      </div>

      <input
        className="w-full p-2 rounded border"
        placeholder="Назва"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </form>
  );
}
