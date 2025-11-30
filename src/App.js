import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Cosmetic from "./pages/Cosmetic";
import Electronic from "./pages/Electronic";
import Fashion from "./pages/Fashion";
import Navbar from "./components/Navbar"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Essential from "./pages/Essential"
import Signin from './pages/Signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cosmetic" element={<Cosmetic/>}/>
          <Route path="/fashion" element={<Fashion/>}/>
          <Route path="/electronic" element={<Electronic/>}/>
          <Route path="/essential" element={<Essential/>}/>
          <Route path="/signin" element={<Signin/>}/>
        </Routes>
<Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
