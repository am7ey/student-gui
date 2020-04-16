import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students = [];

  constructor() { }

  
  addToDatabase(student) {
    this.students.push(student);
  }

  getStudents() {
    return this.students;
  }

  clearStudents() {
    this.students = [];
    return this.students;
  }


}
