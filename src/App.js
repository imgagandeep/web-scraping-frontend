import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "primeflex/primeflex.css";

import { Header } from "./componenets/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "./style/style.css";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
