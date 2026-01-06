import { Provider } from "react-redux";
import { store } from "./app/store";

import AddImageForm from "./features/gallery/AddImageForm";
import GalleryGrid from "./features/gallery/GalleryGrid";
import SelectedPreview from "./features/gallery/SelectedPreview";

export default function ReduxGalleryApp() {
  return (
    <Provider store={store}>
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Міні-галерея</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <div className="p-4 border rounded">
              <h2 className="font-semibold mb-2">Додати зображення</h2>
              <AddImageForm />
            </div>
          </div>

          <div className="lg:col-span-2 p-4 border rounded">
            <GalleryGrid />
            <SelectedPreview />
          </div>
        </div>
      </div>
    </Provider>
  );
}
