import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useHistory } from 'react-router-dom';

const Login = () => {
	  const { login } = useContext(UserContext);
	  const history = useHistory();
	  const [formData, setFormData] = useState({
		      email: '',
		      password: '',
		    });

	  const { email, password } = formData;

	  const onChange = (e) => {
		      setFormData({ ...formData, [e.target.name]: e.target.value });
		    };

	  const onSubmit = async (e) => {
		      e.preventDefault();
		      try {
			            await login(formData);
			            history.push('/'); // Redirect to home or dashboard
			          } catch (err) {
					        console.error(err.response.data); // Handle errors
					      }
		    };

	  return (
		      <div className="login">
		        <h2>Login</h2>
		        <form onSubmit={onSubmit}>
		          <div>
		            <label>Email:</label>
		            <input type="email" name="email" value={email} onChange={onChange} required />
		          </div>
		          <div>
		            <label>Password:</label>
		            <input type="password" name="password" value={password} onChange={onChange} required />
		          </div>
		          <button type="submit">Login</button>
		        </form>
		      </div>
		    );
};

export default Login;
