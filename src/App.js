
// import all pages for fruit design
import FruitDesign from "./fruit/index"
import ViewFruit from "./fruit/viewFruit"
import Cart from "./fruit/cart"
import Account from "./fruit/account"

import { Switch, Route } from "react-router-dom"

function App() {
  return <div className="App">
      <Switch>

      {/* set all fruit design routes */}
        <Route exact path="/">
          <FruitDesign/>
        </Route>
        <Route path="/view-fruit">
          <ViewFruit/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/account">
          <Account/>
        </Route>

      </Switch>
  </div>;
}

export default App;
