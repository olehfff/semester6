import { Routes, Route, Link } from "react-router-dom";
import ColorPicker from "./components/ColorPicker";
import Counter from "./components/Counter";
import Clock from "./components/Clock";
import Pokemons from "./components/Pokemons";
import Form from "./components/Form";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <nav>
        <Link to="/color">ColorPicker</Link> |{" "}
        <Link to="/counter">Counter</Link> |{" "}
        <Link to="/clock">Годинник</Link> |{" "}
        <Link to="/pokemons">Покемони</Link> |{" "}
        <Link to="/form">Форма</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/color" element={<ColorPicker />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/pokemons/*" element={<Pokemons />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}