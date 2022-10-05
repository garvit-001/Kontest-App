import "./App.css";
import Header from "./Title";
import Nav from "./Nav";
import Contests from "./Contests";

import React from "react";
import "./Nav.css";
import QrCode from "./QrCode/QrCode";

import PasswordGenerator from "./PasswordGenerator/PasswordGenerator";
// import Header from "./Title";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <ul className="list-head">
          <li className="list-item">
            <a href="/home" element={<Contests />}>
              Home
            </a>
          </li>
          <li className="list-item">
            <a href="/QrCode" element={<QrCode />}>
              QR code
            </a>
          </li>
          <li className="list-item">
            <a href="/PassWord" element={<PasswordGenerator />}>
              Password Generator
            </a>
          </li>
          <li className="list-item">
            <a href="/todo">ToDO List</a>
          </li>
        </ul>
      </div>
      <Nav />
    </div>
  );
}

export default App;
