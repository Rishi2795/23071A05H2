import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { getStudentByRegNo } from '../data/mockStudents';
import StudentCard from '../components/StudentCard';
import { Student } from '../types';

const Home: React.FC = () => {
  const [regNo, setRegNo] = useState('');
  const [student, setStudent] = useState<Student | null>(null);
  const [error, setError] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!regNo.trim()) {
      setError('Please enter a registration number');
      return;
    }

    setIsSearching(true);

    // Simulate API call delay
    setTimeout(() => {
      const foundStudent = getStudentByRegNo(regNo);
      
      if (foundStudent) {
        setStudent(foundStudent);
      } else {
        setError('No student found with this registration number');
        setStudent(null);
      }
      
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="page-transition min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Student Details Enquiry System
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Quickly access student information using registration numbers
          </p>
          
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
                placeholder="Enter registration number (e.g., STU001)"
                className="input-field py-3 pl-4 pr-12 text-gray-800 w-full text-base rounded-full shadow-lg"
              />
              <button 
                type="submit"
                disabled={isSearching} 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-accent-500 text-white p-2 rounded-full hover:bg-accent-600 transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
            {error && <p className="text-accent-200 mt-2 text-sm">{error}</p>}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 container-custom">
        {isSearching ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-500 border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Searching for student...</p>
          </div>
        ) : student ? (
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-heading font-semibold mb-6 text-center">Student Information</h2>
            <StudentCard student={student} />
          </div>
        ) : (
          <div className="text-center py-8">
            <h2 className="text-2xl font-heading font-semibold mb-2">Search for a Student</h2>
            <p className="text-gray-600">
              Enter a valid registration number to view student details
            </p>
            <div className="mt-6">
              <p className="text-gray-500 text-sm">Sample Registration Numbers for Testing:</p>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {['STU001', 'STU002', 'STU003', 'STU004', 'STU005'].map((sampleRegNo) => (
                  <button
                    key={sampleRegNo}
                    onClick={() => setRegNo(sampleRegNo)}
                    className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                  >
                    {sampleRegNo}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-semibold text-center mb-12">
            Why Use Our Student Enquiry System?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Fast Access</h3>
              <p className="text-gray-600">
                Quickly retrieve student information with just a registration number
              </p>
            </div>
            
            <div className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Secure System</h3>
              <p className="text-gray-600">
                Protected access ensures student data is only available to authorized users
              </p>
            </div>
            
            <div className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Complete Details</h3>
              <p className="text-gray-600">
                View comprehensive student information in a clear, organized format
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;