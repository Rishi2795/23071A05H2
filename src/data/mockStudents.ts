import { Student } from '../types';

export const mockStudents: Student[] = [
  {
    id: '1',
    name: 'John Doe',
    regNo: 'STU001',
    course: 'Computer Science',
    year: 3,
    email: 'john.doe@example.com'
  },
  {
    id: '2',
    name: 'Jane Smith',
    regNo: 'STU002',
    course: 'Information Technology',
    year: 2,
    email: 'jane.smith@example.com'
  },
  {
    id: '3',
    name: 'Michael Johnson',
    regNo: 'STU003',
    course: 'Data Science',
    year: 4,
    email: 'michael.johnson@example.com'
  },
  {
    id: '4',
    name: 'Sarah Williams',
    regNo: 'STU004',
    course: 'Artificial Intelligence',
    year: 3,
    email: 'sarah.williams@example.com'
  },
  {
    id: '5',
    name: 'Robert Brown',
    regNo: 'STU005',
    course: 'Cybersecurity',
    year: 2,
    email: 'robert.brown@example.com'
  }
];

export const getStudentByRegNo = (regNo: string): Student | undefined => {
  return mockStudents.find(student => student.regNo === regNo);
};