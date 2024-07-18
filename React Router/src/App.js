import './App.css';
import { NavLink, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import Contact from './components/Conatct';
import NotFound from './components/NotFound';
import Main from './components/Main';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/support">Support</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>


      <Routes>

        <Route path="/"element={<Main/>}>
          {/* Default Route */}
          <Route index element={<Home/>}/>
          <Route path="/support"element={<Support/>}/>
          <Route path="/about"element={<About/>}/>
          <Route path="/contact"element={<Contact/>}/>
          <Route path="*"element={<NotFound/>}/>
        </Route> 
      </Routes>
    </div>
  );
}

export default App;
