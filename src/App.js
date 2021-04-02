import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import CheckOut from './Components/CheckOut/CheckOut';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';
import Orders from './Components/Orders/Orders';
 export const UserContext = createContext()

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
    <div>
    <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute path="/checkout/:id">
          <CheckOut></CheckOut>
        </PrivateRoute>
        <Route path="/login">
            <Login></Login>
          </Route>
        <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
        <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <Route path="*">
            <Home></Home>
          </Route>
      </Switch>
    </div>
  </Router>
  </UserContext.Provider>
  )
}

export default App;
