import logo from './logo.svg';
import './App.css';
import Header from './Component/Widgets/Header';
import Content from './Component/Widgets/Content';
import Footer from './Component/Widgets/Footer';
// import DiChuyen from './Component/Widgets/DiChuyen';
// import Game from './Component/Widgets/Game';
import Game2 from './Component/Widgets/Game2';
import Home from './Component/Page/Home';
import Register from './Component/Page/Register';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DetailProduct from './Component/Page/DetailProduct';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game2" element={<Game2 />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product">
            <Route path=":productId" element={<DetailProduct />} />
          </Route>
        </Routes>
      <Footer />
      </BrowserRouter>
      
      
      
      
    </div>
  );
}

export default App;
