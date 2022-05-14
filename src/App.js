
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import BaseComp from './baseComp';
import NormalFetch from './apifetcherPrecie';
import Home from './dataBlock';
import './index.css';

function App(){
   
    
return ( 

    <div className="App">
    <nav>
        <ul>
            <li>
                <Home />
            </li>
        </ul>
        <Header />
        <Content />
        <Footer />
        <BaseComp />
    </nav>
    </div>
//Home and NormalFetch
);
}
export default App;