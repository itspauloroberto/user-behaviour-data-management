import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Index = () => <h2>Home</h2>;
const Users = () => <h2>User list</h2>;
const NewUser = () => <h2>User signup</h2>;
const UserDetails = () => <h2>Details for user ID X</h2>;

const RouterConfig = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">See users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/users" exact component={Users} />
      <Route path="/users/new" exact component={NewUser} />
      <Route path="/users/:id" component={UserDetails} />
    </div>
  </Router>
);

export default RouterConfig;