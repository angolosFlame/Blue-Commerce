import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
	  const { user, loading } = useContext(UserContext);

	  if (loading) return <div>Loading...</div>;

	  return (
		      <Route
		        {...rest}
		        render={(props) =>
				        user ? <Component {...props} /> : <Redirect to="/login" />
				      }
		      />
		    );
};

export default PrivateRoute;
