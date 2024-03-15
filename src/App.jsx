import Home from "./pages/Home"
import Menu from "./pages/Menu";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; // Mengimpor Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Mengimpor Bootstrap JavaScript

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} /> 
        <Route path="/menu" exact element={<Menu/>} />
        <Route path="/about" exact element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}



export default App
