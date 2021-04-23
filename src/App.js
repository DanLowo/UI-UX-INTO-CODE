// import all pages from fintech design
import FintechDesign from "./fintech/index"
import Subscriptions from "./fintech/subscriptions"
import Notifications from "./fintech/notifications"
import Cards from "./fintech/cards"
import NewCard from "./fintech/newCard"
import Profile from "./fintech/profile"

import "./fintech/assets/app.scss";

import { Switch, Route } from "react-router-dom"

function App() {
  return <div className="App">
      <Switch>

        {/* set all fintech design routes */}
          <Route exact path="/">
              <FintechDesign/>
          </Route>
          <Route path="/subscriptions">
              <Subscriptions/>
          </Route>
          <Route path="/notifications">
              <Notifications/>
          </Route>
          <Route path="/cards">
              <Cards/>
          </Route>
          <Route path="/new-card">
              <NewCard/>
          </Route>
          <Route path="/profile">
              <Profile/>
          </Route>

      </Switch>
  </div>;
}

export default App;
