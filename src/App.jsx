import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home"


const rootElement = document.getElementById("root");

export function App() {
  render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
}
