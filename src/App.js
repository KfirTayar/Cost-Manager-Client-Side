import './App.css';
import React from "react";
import Navbar from './components/Navbar.js'
import AddCostPage from './addcost.js'
import GetReportPage from "./report";
import AboutPage from "./about";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<AddCostPage />} />
                <Route path='report' element={<GetReportPage />} />
                <Route path='about' element={<AboutPage />} />
            </Routes>
        </Router>
    );
}

export default App;
