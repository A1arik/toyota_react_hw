import './App.css';
import ToyotaModels from "./toyota/allModel/allModel";
import { Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ToyotaMod from "./toyota/mod/toyotaMod";
import React from "react";


function App() {
  return (
      <div className="App">
        <div className="container">
          <div className="row">
            <main className="col-md-9">
              <Router>
                <Link to='/models'> Машины</Link>
                <Switch>
                  <Route exact path="/models" component={ToyotaModels} />
                  <Route path="/models/:id" component={ToyotaMod} />
                </Switch>
              </Router>
            </main>
          </div>
        </div>
      </div>
  );
}

export default App;
