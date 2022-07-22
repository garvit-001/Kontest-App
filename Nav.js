import React from "react";
import "./Nav.css";
import QrCode from "./QrCode/QrCode";
import Contests from "./Contests";
import PasswordGenerator from "./PasswordGenerator/PasswordGenerator";
// import Header from "./Title";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function Nav() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Contests />} />
        {/* <Route path="/about" element = {}/>
      <Route path="/services" element = {}/> */}
        <Route path="/QrCode" element={<QrCode />} />
        <Route path="/PassWord" element={<PasswordGenerator />} />
        {/* <Route path="/todo" element={<Todo />} /> */}
      </Routes>
    </BrowserRouter>

    // <Router>
    //   <section>
    //     <div className="navbar">
    //       <ul className="list-head">
    //         {/* <li className="list-item">
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li className="list-item">
    //           <Link to="/About">About</Link>
    //         </li>

    //         <li className="list-item">
    //           {" "}
    //           <Link to="/Services">Services</Link>
    //         </li> */}

    //         <li className="list-item">
    //           <Link to="/QrCode">QR code</Link>
    //         </li>
    //       </ul>
    //       {/* <Route exact path="/" component={Contests} /> */}
    //       {/* <Route exact path="/About" component={About} />
    //       <Route exact path="/Services" component={Services} /> */}
    //       <Route exact path="/QrCode" component={QrCode} />
    //     </div>
    //   </section>
    //   <Header />
    //   <Contests />
    // </Router>
  );
}

export default Nav;
