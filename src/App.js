import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';


function App() {
    return (
        <div className="App" >
            <Router>
                <Navbar />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />} />

                    <Route
                        path="/contact"
                        element={<Contact />} />

                    <Route
                        path="/about"
                        element={<About />} />

                </Routes>
            </Router>
        </div>
    )
};

export default App;