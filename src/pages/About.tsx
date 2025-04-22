import React from 'react';
import { GraduationCap, Clock, CheckCircle, Users, BookOpen, Database } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="page-transition min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">About Our System</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Providing fast, reliable access to student information for educational institutions since 2020
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block p-2 bg-primary-50 rounded-full mb-6">
              <GraduationCap className="h-10 w-10 text-primary-500" />
            </div>
            
            <h2 className="text-3xl font-heading font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We strive to simplify the student information management process through innovative, 
              user-friendly technology that enhances administrative efficiency while ensuring data 
              security and privacy.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-semibold text-center mb-12">What We Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Information Management</h3>
              <p className="text-gray-600">
                We provide a centralized system for storing, accessing, and managing student records securely.
              </p>
            </div>
            
            <div className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Real-Time Access</h3>
              <p className="text-gray-600">
                Our system provides instant access to student details, saving time and reducing administrative workload.
              </p>
            </div>
            
            <div className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Data Verification</h3>
              <p className="text-gray-600">
                We ensure data accuracy and integrity through validation processes and regular updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-semibold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Student Details Enquiry System was born out of a need to simplify and streamline the process of 
                accessing student information in educational institutions. What started as a small project in 2020 
                has grown into a comprehensive platform serving schools and universities across the country.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, Dr. Jane Thompson, a former university administrator, experienced firsthand the challenges 
                of managing student records efficiently. Frustrated by outdated systems and time-consuming processes, 
                she envisioned a solution that would make information access seamless and secure.
              </p>
              <p className="text-gray-600">
                Today, our team of dedicated professionals continues to innovate and improve the system, 
                incorporating feedback from administrators, faculty, and students to create a tool that truly 
                serves the needs of educational communities.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team working together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold mb-2">250+</div>
              <p className="opacity-80">Schools Served</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-heading font-bold mb-2">1M+</div>
              <p className="opacity-80">Student Records</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-heading font-bold mb-2">99.9%</div>
              <p className="opacity-80">Uptime</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-heading font-bold mb-2">24/7</div>
              <p className="opacity-80">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-semibold text-center mb-12">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Dr. Jane Thompson"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-1">Dr. Jane Thompson</h3>
                <p className="text-primary-500 mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  Former university administrator with 15+ years of experience in educational management.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Michael Chen"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-1">Michael Chen</h3>
                <p className="text-primary-500 mb-3">CTO</p>
                <p className="text-gray-600 text-sm">
                  Tech visionary with expertise in building secure, scalable software systems.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Sarah Johnson"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-1">Sarah Johnson</h3>
                <p className="text-primary-500 mb-3">Head of Operations</p>
                <p className="text-gray-600 text-sm">
                  Organizational expert ensuring smooth, efficient service delivery to all our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-semibold text-center mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 p-2 rounded-full">
                <Users className="h-6 w-6 text-primary-500" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-2">Student-Centered</h3>
                <p className="text-gray-600">
                  We design our systems with students at the center, ensuring their needs and privacy are always prioritized.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-2">Security & Privacy</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of data security and privacy protection in all our operations.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-2">Reliability</h3>
                <p className="text-gray-600">
                  Our systems are built for dependability, ensuring educational institutions can access critical information without interruption.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 p-2 rounded-full">
                <BookOpen className="h-6 w-6 text-primary-500" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-2">Continuous Improvement</h3>
                <p className="text-gray-600">
                  We are committed to ongoing learning and enhancement of our systems to meet evolving educational needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;