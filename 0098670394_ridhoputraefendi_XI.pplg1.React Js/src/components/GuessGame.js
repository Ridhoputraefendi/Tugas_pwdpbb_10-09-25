import React, { useState } from "react";

function GuessGame() {
  const [number] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(guess) === number) {
      setMessage("Tebakan kamu benar! 🎉");
    } else {
      setMessage("Salah, coba lagi!");
    }
    setGuess("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Game Tebak Angka</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Masukkan tebakan"
        />
        <button type="submit">Tebak</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default GuessGame;
