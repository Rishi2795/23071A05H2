import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setIsLoading(true);
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError((err as Error).message || 'Login failed. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="page-transition min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-md mx-auto card p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-heading font-bold text-gray-800">Welcome Back</h1>
            <p className="text-gray-600 mt-2">Log in to access your account</p>
          </div>

          <form onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 text-error p-3 rounded-md mb-6 text-sm">
                {error}
              </div>
            )}

            <div className="mb-6">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field py-2 pl-10"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <a href="#" className="text-sm text-primary-500 hover:text-primary-600">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field py-2 pl-10"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-600">
                  Keep me signed in
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full py-2.5"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  Logging in...
                </span>
              ) : (
                'Log In'
              )}
            </button>

            <p className="text-center mt-6 text-gray-600 text-sm">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary-500 hover:text-primary-600 font-medium">
                Register here
              </Link>
            </p>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-4">For testing, use these credentials:</p>
            <div className="bg-gray-50 p-2 rounded text-xs text-gray-600 font-mono">
              Email: test@example.com<br/>
              Password: password123
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;