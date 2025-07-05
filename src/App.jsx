import { useState } from "react";
import "./App.css";
import Hero from "./pages/Hero/app";
import About from "./pages/About/app";
// import NavBar from "./components/NavBar/app";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <NavBar /> */}
      <Hero />
      <About />
    </>
  );
}

export default App;
