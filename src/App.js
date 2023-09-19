// App.js
import React from "react";
import AppRouter from "./Router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        {"This is a Beatifull FrontEnd, Not Really"}
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Render the Router component */}
      <main>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
