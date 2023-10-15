import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import BackButton from './BackButton';
import FowardButton from './FowardButton';
import GoHomeButton from './GoHomeButton';

function Home() {
  return <p>Home</p>;
}

function About(){
  return <p>About</p>
}

function App() {
  return (
    <Router>
      <div className="App">
        <BackButton />
        <FowardButton />
        <GoHomeButton />
        <div>
          <Link to="/">Home</Link>
        </div>
        {Array(10)
          .fill()
          .map((ignoredValue, index) => index + 1)
          .map((id) => (
            <div key={id}>
              <Link to={`/user/${id}`}>User {id}</Link>
            </div>
          ))}
        <Switch>
          
          <Route path="/user/:userId">
            <UserProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
