import logo from './logo.svg';
import './App.css';
import TopBar from './topbar/TopBar';
import Home from './pages/home/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Posts from './posts/Posts';
import Settings from './settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  const user = true;
  return (
    <div className="App1">
      <Router>
      <TopBar/>
      <Switch>
        <Route exact path="/">
          {user ? <Home/> : <Login/>}
        </Route>
        <Route path="/blogs">
          <Posts/>
        </Route>
        <Route path="/post/:postId">
          <Settings/>
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
        <Route path="/register">
        <Register/>
        </Route>
      </Switch>
      </Router>

    </div>
  );
}

export default App;
