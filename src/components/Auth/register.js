// Register.js
import React, { useState } from 'react';
import API from '../../services/api'; 
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    status: ''
  });

  const [message, setMessage] = useState('');
   const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/user/register', formData);
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">
      <form onSubmit={handleSubmit} className="bg-pink-100 p-8 rounded-3xl shadow-2xl w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {message && <div className="mb-4 text-center text-red-500">{message}</div>}

        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none  
          focus:ring-2 focus:ring-red-700 transition"/>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-xl 
          focus:outline-none focus:ring-2 focus:ring-red-700 transition"/>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none 
              focus:ring-2 focus:ring-red-700 transition"/>
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Status</label>
          <input type="text" name="status" value={formData.status} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none 
              focus:ring-2 focus:ring-red-700 transition"
          />
        </div>
      <Link to="/login">
        <button
          type="submit"
          className="mt-2 w-full bg-gradient-to-r from-blue-300 to-green-300 text-white py-2 rounded-xl 
          font-semibold hover:from-green-400 hover:to-blue-400 transition">
          Register</button>
      </Link>
      <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-blue-600 hover:underline font-medium cursor-pointer"
          >
            Login here
          </span>
        </p>
      
      </form>
    </div>
  );
};

export default Register;