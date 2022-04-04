import BodySection from './Components/BodySection';
import Navbar from './Components/Navbar';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<BodySection />} />
      <Route path="/TicTacToe" element={<Navbar/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
