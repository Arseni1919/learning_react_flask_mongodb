import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./components/About";
import Stocks from "./components/Stocks";
// import ReactDOM, {createRoot} from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<Stocks />} />
            <Route path="app" element={<App />} />
            <Route path="about" element={<About />} />
        </Routes>
    </Router>
);
