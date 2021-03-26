import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import {Container} from 'semantic-ui-react'
import NavBar from './components/NavBar';
import About from './pages/About';
import { PRIMARY_COLOR } from './styles';
import ComponentDemo from './pages/ComponentDemo';
import Register from './pages/Register';
import Login from './pages/Login';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectRoute';
import RegisterUX from './pages/RegisterUX';
import UserPosts from './pages/UserPosts';
import Post from './pages/Post';

function App() {

  return (
    <>
    <NavBar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path='/' component={UserPosts} />
          <ProtectedRoute exact path='/posts/:id' component={Post} />
          
          <Route exact path='/about' component={About} />
          {/* <Route exact path='/register' component={Register} /> */}
          <Route exact path='/register' component={RegisterUX} />
          <Route exact path='/login' component={Login} />
          {/* <Route exact path='/demo' render={(props) => <p>route using render</p>} /> */}
          <Route exact path='/componentDemo' component={ComponentDemo} />
          
        </Switch>
        </Container>
      </FetchUser>
   </>
  );
}

export default App;
