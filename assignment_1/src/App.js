import './App.css';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Profile from './pages/Profile';
import Footer from './pages/Footer';
import EditProfile from './pages/EditProfile';
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
          <Router>
            <Navbar /> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SignIn" element={<Signin />} />
                <Route path="/SignUp" element={<Signup />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/EditProfile" element={<EditProfile />} />

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
