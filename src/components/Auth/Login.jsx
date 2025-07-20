import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import '../../App.css';

 const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn({ email, password });
      navigate("/dashboard");
    } catch (error) {
      setError(error.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-300 to-purple-600 px-4">
  <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-xl p-8 w-full max-w-md">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium mb-1">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"/>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 
        rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"/>
      </div>
        {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>)}
        <div className="mt-2">
          <Link to="/quize">
         <button type="submit" className="w-full py-2 px-4 bg-gradient-to-r from-yellow-300 to-green-400 hover:bg-indigo-600 text-white font-semibold 
         rounded-lg shadow-md transition duration-300">Login</button>
        </Link>
        </div>
        <div className="mt-2">
        <Link to="/register">
        <button type="submit" className="w-full py-2 px-4 bg-gradient-to-r from-yellow-300 to-green-400 hover:bg-indigo-600 text-white font-semibold 
         rounded-lg shadow-md transition duration-300">Register</button>
       </Link>
       </div>
         
    </form>
  </div>
</div>

  );
};

export default Login; 