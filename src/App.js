import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TeamDashboard from './TeamDashboard';
import MemberDashboard from './MemberDashboard';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <div className="user-dashboard">
        <div className="user-dashboard__top">
          <h2 className="user-dashboard__title">Teams</h2>
          <form className="user-dashboard__form">
            <label htmlFor="searchBar">
              Search
              <input
                type="text"
                id="searchBar"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </label>
          </form>
        </div>
        <div className="user-dashboard__content">
          <ul className="user-dashboard__users">
            <Router>
              <Switch>
                <Route exact path="/">
                  <TeamDashboard searchTerm={searchTerm} />
                </Route>
                <Route path="/team/:id">
                  <MemberDashboard searchTerm={searchTerm} />
                </Route>
              </Switch>
            </Router>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
