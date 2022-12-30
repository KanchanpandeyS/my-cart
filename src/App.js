import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="App">
      

      <Route exact path="/" component={withRouter(Home)} />
      <Route exact  path="/cart" component={withRouter(Cart)} />
    </div>
  </BrowserRouter>
  );
}

export default App;
