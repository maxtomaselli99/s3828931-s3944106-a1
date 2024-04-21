import './App.css';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Content from './pages/Content';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Sidebar from './pages/Sidebar';
import Signin from './pages/SignIn';
import Signup from './pages/SignUp';
import { useState } from "react";
import {
    BrowserRouter as Router,
    redirect,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";


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
          <Router>
            <Navbar /> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SignIn" element={<Signin />} />
                <Route path="/SignUp" element={<Signup />} />

            </Routes>
            </Router>
          {/* <div className="grid mx-auto grid-cols-4 grod-flow-col">
              <Content></Content>
              <Sidebar></Sidebar>
          </div> */}
          <redirect from='/' to='/Home' />
          <Footer></Footer>
      </div>
  );
}


export default App;
