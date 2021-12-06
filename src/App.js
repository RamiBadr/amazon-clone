import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import Checkout from './components/pages/Checkout';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import { onAuthStateChanged } from '@firebase/auth';
import { useStateValue } from './components/helpers/StateProvider';
import { auth } from './firbase-config';
import { useEffect } from 'react';

function App() {
  const [{user}, dispatch] = useStateValue()

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      if(currentUser) {
        dispatch({
          type:"SET_USER", 
          user: currentUser
        });
      } else {
        dispatch({
          type:"SET_USER",
          user: null
        });
      }
    })
  }, [])
  
  console.log(user);

  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
