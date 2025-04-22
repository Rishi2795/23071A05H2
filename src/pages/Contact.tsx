import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate sending the form data
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 1500);
    }
  };

  return (
    <div className="page-transition min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-500 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90 max-w-xl mx-auto">
            Have questions about our student enquiry system? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-heading font-semibold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Our dedicated team is ready to assist you with any inquiries or technical support you may need regarding the Student Details Enquiry System.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Our Location</h3>
                    <p className="text-gray-600">123 Education Ave, Academic District, ED 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Email Us</h3>
                    <p className="text-gray-600">info@studentenquiry.edu</p>
                    <p className="text-gray-600">support@studentenquiry.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>
              </div>
              
              {/* Office Hours */}
              <div className="mt-10">
                <h3 className="text-xl font-heading font-semibold mb-4">Office Hours</h3>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="font-medium text-gray-800">Monday - Friday:</p>
                      <p className="text-gray-600">9:00 AM - 5:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Saturday:</p>
                      <p className="text-gray-600">10:00 AM - 2:00 PM</p>
                    </div>
                    <div className="col-span-2">
                      <p className="font-medium text-gray-800">Sunday:</p>
                      <p className="text-gray-600">Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="card p-8">
              {submitted ? (
                <div className="text-center py-10 px-4 animate-fade-in">
                  <div className="bg-success bg-opacity-10 p-3 rounded-full inline-flex items-center justify-center mb-4">
                    <svg className="h-10 w-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-4">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-heading font-semibold mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="form-label">
                        Your Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`input-field py-2 pl-10 ${errors.name ? 'border-error focus:border-error focus:ring-error' : ''}`}
                          placeholder="John Doe"
                        />
                      </div>
                      {errors.name && <p className="form-error">{errors.name}</p>}
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
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`input-field py-2 pl-10 ${errors.email ? 'border-error focus:border-error focus:ring-error' : ''}`}
                          placeholder="your@email.com"
                        />
                      </div>
                      {errors.email && <p className="form-error">{errors.email}</p>}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="form-label">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`input-field py-2 ${errors.subject ? 'border-error focus:border-error focus:ring-error' : ''}`}
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Account Issues">Account Issues</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.subject && <p className="form-error">{errors.subject}</p>}
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`input-field ${errors.message ? 'border-error focus:border-error focus:ring-error' : ''}`}
                        placeholder="How can we help you?"
                      ></textarea>
                      {errors.message && <p className="form-error">{errors.message}</p>}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-2.5 flex justify-center items-center"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-heading font-semibold mb-6 text-center">Find Us on the Map</h2>
          <div className="bg-white rounded-lg overflow-hidden shadow-md aspect-video">
            <img 
              src="https://images.pexels.com/photos/60626/pexels-photo-60626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Campus Map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;