import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
   <>
   <Header/>
   <div className="App">
    <Switch>
      <Route path="/" exact>
        <Redirect to="/Home"/>
      </Route>
      <Route path="/Home">
        <Home/>
      </Route>
      <Route path="/cart" exact>
        <Cart/>
      </Route>
    </Switch>
   </div>
   </>
  );
}

export default App;
