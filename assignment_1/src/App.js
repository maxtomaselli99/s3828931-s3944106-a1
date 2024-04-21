import './App.css';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Content from './pages/Content';
import Footer from './pages/Footer';
import Sidebar from './pages/Sidebar';
import { useState } from "react";


function App() {
    const [Banana = [20, 3], setBanana] = useState();
    const [Potato = [30, 1], setPotato] = useState();
    const [Cherry = [50, 10], setCherry] = useState();
    useState(() => {
        localStorage.setItem('Banana', JSON.stringify(Banana));
        localStorage.setItem('Potato', JSON.stringify(Potato));
        localStorage.setItem('Cherry', JSON.stringify(Cherry));
    }, [Banana, Potato, Cherry]);

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
