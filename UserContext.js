import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	  const [user, setUser] = useState(null);
	  const [loading, setLoading] = useState(true);

	  // Load user from localStorage (if token exists)
	  useEffect(() => {
		      const token = localStorage.getItem('token');
		      if (token) {
			            axios.defaults.headers.common['Authorization'] = token;
			            axios.get('/api/auth/user')
			              .then(response => {
					                setUser(response.data);
					              })
			              .catch(() => {
					                setUser(null);
					              })
			              .finally(() => setLoading(false));
			          } else {
					        setLoading(false);
					      }
		    }, []);

	  // Function to register a user
	  const register = async (userData) => {
		      const response = await axios.post('/api/auth/register', userData);
		      localStorage.setItem('token', response.data.token);
		      setUser(response.data.user);
		    };

	  // Function to log in a user
	  const login = async (userData) => {
		      const response = await axios.post('/api/auth/login', userData);
		      localStorage.setItem('token', response.data.token);
		      setUser(response.data.user);
		    };

	  // Function to log out a user
	  const logout = () => {
		      localStorage.removeItem('token');
		      delete axios.defaults.headers.common['Authorization'];
		      setUser(null);
		    };

	  return (
		      <UserContext.Provider value={{ user, register, login, logout, loading }}>
		        {children}
		      </UserContext.Provider>
		    );
};

export default UserProvider;
