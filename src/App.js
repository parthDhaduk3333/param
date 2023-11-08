import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Gallary from './pages/Gallary';
import "react-image-gallery/styles/css/image-gallery.css";
import AboutUS from './pages/AboutUS';
import ContactUs from './pages/ContactUs';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/gallary' element={<Gallary />}></Route>
                    <Route path='/about' element={<AboutUS />}></Route>
                    <Route path='/contact' element={<ContactUs />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
