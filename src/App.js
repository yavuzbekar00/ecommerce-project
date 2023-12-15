import { useState } from 'react';
import './App.css';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "https://productimages.hepsiburada.net/s/49/500/10983949860914.jpg",
      name: "Macbook Air M1",
      content: "Apple MacBook Air M1 Çip 8GB 256GB SSD macOS 13 QHD Taşınabilir Bilgisayar Uzay Grisi",
      price: "43.000"
    },
    {
      id: 2,
      image: "https://productimages.hepsiburada.net/s/75/1500/110000017291261.jpg",
      name: "Macbook Air M1",
      content: "Apple MacBook Air M1 Çip 8GB 256GB SSD macOS 13 QHD Taşınabilir Bilgisayar Uzay Grisi",
      price: "43.000"
    },
    {
      id: 3,
      image: "https://productimages.hepsiburada.net/s/49/500/10983949860914.jpg",
      name: "Macbook Air M1",
      content: "Apple MacBook Air M1 Çip 8GB 256GB SSD macOS 13 QHD Taşınabilir Bilgisayar Uzay Grisi",
      price: "43.000"
    },
    {
      id: 4,
      image: "https://productimages.hepsiburada.net/s/49/500/10983949860914.jpg",
      name: "Macbook Air M1",
      content: "Apple MacBook Air M1 Çip 8GB 256GB SSD macOS 13 QHD Taşınabilir Bilgisayar Uzay Grisi",
      price: "43.000"
    },
    {
      id: 5,
      image: "https://productimages.hepsiburada.net/s/49/500/10983949860914.jpg",
      name: "Macbook Air M1",
      content: "Apple MacBook Air M1 Çip 8GB 256GB SSD macOS 13 QHD Taşınabilir Bilgisayar Uzay Grisi",
      price: "43.000"
    },
    {
      id: 6,
      image: "https://productimages.hepsiburada.net/s/49/500/10983949860914.jpg",
      name: "Macbook Air M1",
      content: "Apple MacBook Air M1 Çip 8GB 256GB SSD macOS 13 QHD Taşınabilir Bilgisayar Uzay Grisi",
      price: "43.000"
    },
  ])
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className='app-container'>
        <Sidebar></Sidebar>
        <Main products={products}></Main>
      </div>
    </div>
  );
}

export default App;
