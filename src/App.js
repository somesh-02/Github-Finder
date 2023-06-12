import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import React, { Fragment, useState } from 'react';
import NavBar from './components/layout/Navbar';
import User from './components/users/user';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Home from './components/pages/home';
import NotFound from './components/pages/NotFound';

import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState';

const App = () => {
  //const [users,setUsers]=useState([]);
  //const [user,setUser]=useState({});
  //const [repos,setRepos]=useState([]);
  //const [loading,setLoading]=useState(false);
  const [alert,setAlert]=useState(null);
  
  /*async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data, loading: false });
  }*/
    return (
      <GithubState>
        <AlertState>

        
      <Router>
        <div className="App">
          <NavBar title="Github Finder" icon="fab fa-github" />
          <div className='container'>
          <Alert />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path='/user/:login' component={User}/>
            <Route component={NotFound}/>
          </Switch>
          </div>
        </div>
      </Router>
      </AlertState>
      </GithubState>
    );
  }
export default App;
