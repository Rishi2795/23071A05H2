import React from 'react';
import { Student } from '../types';
import { UserIcon, Book, Calendar, Mail } from 'lucide-react';

interface StudentCardProps {
  student: Student;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <div className="card p-6 animate-slide-in">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="bg-primary-100 rounded-full w-24 h-24 flex items-center justify-center shrink-0 mx-auto md:mx-0">
          <UserIcon className="h-12 w-12 text-primary-500" />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-heading font-semibold mb-2">{student.name}</h2>
          <p className="text-primary-500 font-medium mb-4">Registration No: {student.regNo}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center space-x-2">
              <Book className="h-5 w-5 text-accent-500" />
              <span className="text-gray-700">{student.course}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-accent-500" />
              <span className="text-gray-700">Year {student.year}</span>
            </div>
            
            <div className="flex items-center space-x-2 md:col-span-2">
              <Mail className="h-5 w-5 text-accent-500" />
              <span className="text-gray-700">{student.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;