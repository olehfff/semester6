import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Привіт, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Введи ім’я:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button type="submit">Відправити</button>
    </form>
  );
}
