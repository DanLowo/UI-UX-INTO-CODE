
// import all pages for hiring design
import HiringDesign from './Projects/hiring/index'
import ViewJob from './Projects/hiring/viewJob'

// import all pages for fruit design
import FruitDesign from "./Projects/fruit/index"

import { Switch, Route } from "react-router-dom"

function App() {
  return <div className="App">
      <Switch>

      {/* set all hirign design routes */}
        <Route exact path="/">
          <HiringDesign/>
        </Route>
        <Route path="/view-job">
          <ViewJob/>
        </Route>

      {/* set all fruit design routes */}
        <Route path="/fruit">
          <FruitDesign/>
        </Route>
      </Switch>
  </div>;
}

export default App;
