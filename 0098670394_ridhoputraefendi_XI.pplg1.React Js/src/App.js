import React, { useState } from "react";
import TodoApp from "./components/TodoApp";
import GuessGame from "./components/GuessGame";

function App() {
  const [page, setPage] = useState("todo"); // default buka Todo List

  return (
    <div style={{ padding: "20px" }}>
      <h1>My React App</h1>
      <nav style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("todo")}>Todo List</button>
        <button onClick={() => setPage("game")}>Game Tebak Angka</button>
      </nav>

      {page === "todo" ? <TodoApp /> : <GuessGame />}
    </div>
  );
}

export default App;
