import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { SpeedInsights } from "@vercel/speed-insights";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SpeedInsights />
      Staring project
      <h2 className="text-[48px] font-bold text-red-600">Title</h2>
    </>
  );
}

export default App;
