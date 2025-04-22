import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, User, CheckCircle, XCircle } from 'lucide-react';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const validatePassword = (password: string): boolean => {
    return password.length >= 8;
  };

  const passwordsMatch = (): boolean => {
    return password === confirmPassword;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long');
      return;
    }

    if (!passwordsMatch()) {
      setError('Passwords do not match');
      return;
    }

    try {
      setIsLoading(true);
      await register(name, email, password);
      navigate('/');
    } catch (err) {
      setError((err as Error).message || 'Registration failed. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="page-transition min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-md mx-auto card p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-heading font-bold text-gray-800">Create an Account</h1>
            <p className="text-gray-600 mt-2">Join our student enquiry platform</p>
          </div>

          <form onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 text-error p-3 rounded-md mb-6 text-sm">
                {error}
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field py-2 pl-10"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="mb-4">
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

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
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
              <div className="mt-1 flex items-center">
                {password ? (
                  validatePassword(password) ? (
                    <CheckCircle className="h-4 w-4 text-success mr-1" />
                  ) : (
                    <XCircle className="h-4 w-4 text-error mr-1" />
                  )
                ) : null}
                <span className={`text-xs ${validatePassword(password) ? 'text-success' : 'text-gray-500'}`}>
                  Password must be at least 8 characters
                </span>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="input-field py-2 pl-10"
                  placeholder="••••••••"
                />
              </div>
              {password && confirmPassword && (
                <div className="mt-1 flex items-center">
                  {passwordsMatch() ? (
                    <CheckCircle className="h-4 w-4 text-success mr-1" />
                  ) : (
                    <XCircle className="h-4 w-4 text-error mr-1" />
                  )}
                  <span className={`text-xs ${passwordsMatch() ? 'text-success' : 'text-error'}`}>
                    {passwordsMatch() ? 'Passwords match' : 'Passwords do not match'}
                  </span>
                </div>
              )}
            </div>

            <div className="mb-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  className="h-4 w-4 mt-0.5 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                  required
                />
                <span className="ml-2 text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-primary-500 hover:text-primary-600">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-primary-500 hover:text-primary-600">
                    Privacy Policy
                  </a>
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
                  Creating Account...
                </span>
              ) : (
                'Register'
              )}
            </button>

            <p className="text-center mt-6 text-gray-600 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-primary-500 hover:text-primary-600 font-medium">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;