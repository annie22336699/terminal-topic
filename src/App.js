import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import TestCol from './TestCol';
// import Mtl from './page/mtl/Mtl';
import Customize from './page/customize/Customize';
import CusMiDetail from './page/customize/CusMiDetail';

function App() {
  return (
    <Router>
      <>
        <Switch>
          {/* <TestCol /> */}
          {/* <Mtl /> */}
          <Route path="/:id" exact>
            <CusMiDetail />
          </Route>
          <Route path="/">
            <Customize />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
