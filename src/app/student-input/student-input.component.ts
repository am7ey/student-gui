import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from './student.service'

@Component({
  selector: 'app-student-input',
  templateUrl: './student-input.component.html',
  styleUrls: ['./student-input.component.css']
})
export class StudentInputComponent implements OnInit {

  students;
  studentInputForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private studentService: StudentService) { 
    this.studentInputForm = this.formBuilder.group({
      firstName: '',
      lastName: ''
    });
  }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  onSubmit(studentData) {

    //this.students = this.studentService.clearStudents();
    this.studentInputForm.reset();
    this.studentService.addToDatabase(studentData);

    console.warn('Student details added.', studentData);
  }

}
