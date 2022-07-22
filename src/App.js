import "./App.css";
import Header from "./Title";
import Nav from "./Nav";
import Contests from "./Contests";

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <ul className="list-head">
          <li className="list-item">
            <a href="http://localhost:3000/home">Home</a>
          </li>
          <li className="list-item">
            <a href="http://localhost:3000/QrCode">QR code</a>
          </li>
          <li className="list-item">
            <a href="http://localhost:3000/PassWord">Password Generator</a>
          </li>
          <li className="list-item">
            <a href="http://localhost:3000/todo">ToDO List</a>
          </li>
        </ul>
      </div>
      <Nav />
    </div>
  );
}

export default App;
