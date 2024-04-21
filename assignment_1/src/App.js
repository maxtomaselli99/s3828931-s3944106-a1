import './App.css';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Content from './pages/Content';
import Footer from './pages/Footer';
import Sidebar from './pages/Sidebar';
import { useState } from "react";


function App() {
    const [BananaDiscount = 20, setBananaDiscount] = useState();
    const [PotatoDiscount = 12, setPotatoDiscount] = useState();
    const [CherryDiscount = 50, setCherryDiscount] = useState();
    useState(() => {
        localStorage.setItem('Banana', JSON.stringify(BananaDiscount));
        localStorage.setItem('Potato', JSON.stringify(PotatoDiscount));
        localStorage.setItem('Cherry', JSON.stringify(CherryDiscount));
    }, [BananaDiscount]);

    return (
      <div>
          <Header></Header>
          <Navbar></Navbar>
          <div className="grid mx-auto grid-cols-4 grod-flow-col">
              <Content></Content>
              <Sidebar></Sidebar>
          </div>
          <Footer></Footer>
      </div>
  );
}


export default App;
