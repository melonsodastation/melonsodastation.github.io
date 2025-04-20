import { useState } from "react";
import "./styles/App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Profile from "./features/Profile";

function App() {
  return (
    <div>
      <header className="bg-green-500">
        <Header />
      </header>
      <main>
        <Profile />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
