import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import FilePage from './routes/FilePage';
import "./index.css"
import Analyse from './routes/Analyse';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<FilePage></FilePage>} ></Route>
            <Route path='/analyse' element={<Analyse></Analyse>}></Route>
        </Routes>
    </BrowserRouter>
);
