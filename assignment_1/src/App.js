import './App.css';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Content from './pages/Content';
import Footer from './pages/Footer';

function App() {
  return (
      <div>
          <Header></Header>
          <Navbar></Navbar>
          <div className="row">
              <Content></Content>
          </div>
          <Footer></Footer>
      </div>
  );
}

export default App;
