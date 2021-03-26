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
import MyCats from './pages/MyCats';

function App() {

  return (
    <>
    <NavBar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path='/' component={Home} />
          <ProtectedRoute exact path='/myCats' component={MyCats} />
          <Route exact path='/about' component={About} />
          <Route exact path='/register' component={Register} />
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
