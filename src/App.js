import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  RecoilRoot
} from 'recoil';
// Components
import Overview from './Screens/Overview';

function App() {
  return (<RecoilRoot>
    <div className="App">
      <Router>
        <Switch>
          <Route path="/"><Overview /></Route>
        </Switch>
      </Router>
    </div>
  </RecoilRoot>
  );
}

export default App;
