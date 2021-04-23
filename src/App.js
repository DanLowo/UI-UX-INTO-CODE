import HiringDesign from './hiring/index'
import ViewJob from './hiring/viewJob'

import { Switch, Route } from "react-router-dom"

function App() {
  return <div className="App">
      <Switch>
        <Route exact path="/">
          <HiringDesign/>
        </Route>
        <Route path="/view-job">
          <ViewJob/>
        </Route>
      </Switch>
  </div>;
}

export default App;
