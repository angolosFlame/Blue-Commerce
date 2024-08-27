import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
	  return (
		      <Router>
		        <Switch>
		          <Route path="/login" component={Login} />
		          <Route path="/register" component={Register} />
		          {/* Other routes */}
		        </Switch>
		      </Router>
		    );
}

export default App;
