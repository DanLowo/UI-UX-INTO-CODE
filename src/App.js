// import all pages from fintech design
import FintechDesign from "./Projects/fintech/index"
import Subscriptions from "./Projects/fintech/subscriptions"
import Notifications from "./Projects/fintech/notifications"
import Cards from "./Projects/fintech/cards"
import NewCard from "./Projects/fintech/newCard"
import Profile from "./Projects/fintech/profile"


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
