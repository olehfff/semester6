import { Link, Routes, Route } from "react-router-dom";

export default function Pokemons() {
  return (
    <div>
      <h2>Покемони</h2>
      <nav>
        <Link to="pikachu">Пікачу</Link> | <Link to="bulbasaur">Бульбазавр</Link>
      </nav>

      <Routes>
        <Route path="pikachu" element={<h3>Це Пікачу ⚡</h3>} />
        <Route path="bulbasaur" element={<h3>Це Бульбазавр 🌿</h3>} />
      </Routes>
    </div>
  );
}
