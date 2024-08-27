import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useHistory } from 'react-router-dom';

const Register = () => {
	  const { register } = useContext(UserContext);
	  const history = useHistory();
	  const [formData, setFormData] = useState({
		      name: '',
		      email: '',
		      password: '',
		    });

	  const { name, email, password } = formData;

	  const onChange = (e) => {
		      setFormData({ ...formData, [e.target.name]: e.target.value });
		    };

	  const onSubmit = async (e) => {
		      e.preventDefault();
		      try {
			            await register(formData);
			            history.push('/'); // Redirect to home or dashboard
			          } catch (err) {
					        console.error(err.response.data); // Handle errors
					      }
		    };

	  return (
		      <div className="register">
		        <h2>Register</h2>
		        <form onSubmit={onSubmit}>
		          <div>
		            <label>Name:</label>
		            <input type="text" name="name" value={name} onChange={onChange} required />
		          </div>
		          <div>
		            <label>Email:</label>
		            <input type="email" name="email" value={email} onChange={onChange} required />
		          </div>
		          <div>
		            <label>Password:</label>
		            <input type="password" name="password" value={password} onChange={onChange} required />
		          </div>
		          <button type="submit">Register</button>
		        </form>
		      </div>
		    );
};

export default Register;
