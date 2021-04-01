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
import Delete from './Components/Delete/Delete';
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
        <Route path="/home">
          <Home />
        </Route>
        <PrivateRoute path="/checkout/:id">
          <CheckOut></CheckOut>
        </PrivateRoute>
        <Route path="/login">
            <Login></Login>
          </Route>
        <Route path="/admin">
            <Admin></Admin>
          </Route>
        <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
      </Switch>
    </div>
  </Router>
  </UserContext.Provider>
  )
}

export default App;
