import '../App.css';
import Content from './Content';

import Sidebar from './Sidebar';



function Home() {

    return (
        <div className="grid mx-auto grid-cols-4 grid-flow-col">
            <Content />
            <Sidebar />
        </div>

  );
}


export default Home;
