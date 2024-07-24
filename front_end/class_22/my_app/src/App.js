import logo from './logo.svg';
import './App.css';
import Mycomponent1 from './mycomponent/Mycomponent1.js';
import Mycomponent2 from './mycomponent/Mycomponent2.js';
import Products from './mycomponent/Products.js';
import Counter from './mycomponent/Counter.js';
import Form from "./mycomponent/Form.js"
import Navbar from "./mycomponent/Navbar.js"
import Banner from './mycomponent/Banner.js';
import Movies from "./mycomponent/Movies.js"

function App() {
  return (
    <div className="App">
     {/* <h1>Hello all</h1> */}
     {/* <Mycomponent1/>
     <Mycomponent2/>
     <Products/>


     <Counter/> */}
     {/* <Form/> */}

     <Navbar/>
     <Banner/>
     <Movies/>



    </div>
  );
}

export default App;
