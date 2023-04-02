import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage'
import Login from './pages/Login'
import Features from './pages/Features'
import About from './pages/About'
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout/>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/about" element={<About/>}/>
          <Route path = "/features" element={<Features/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path = "/*" element={<NoPage/>}/>
        </Routes>
      </Router>
      {/* <Home/> */}
    </div>
  );
}

export default App;
