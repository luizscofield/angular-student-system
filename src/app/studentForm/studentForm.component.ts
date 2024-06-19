// src/app/student-form/student-form.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service'; // Adjusted service import

@Component({
  selector: 'app-student-form',
  templateUrl: './studentForm.component.html',
  styleUrls: ['./studentForm.component.scss']
})
export class StudentFormComponent implements OnInit {
  student: any = {};
  isEditMode = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentService: StudentService // Adjusted service injection
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.studentService.getStudentById(id).subscribe(student => {
          this.student = student;
        });
      }
    });
  }

  saveStudent(): void {
    if (this.isEditMode) {
      this.studentService.updateStudent(this.student).subscribe(() => {
        this.router.navigate(['/list']);
      }, error => {
        console.error('Error updating student:', error);
        // Handle error (e.g., show error message)
      });
    } else {
      this.studentService.addStudent(this.student).subscribe(() => {
        this.router.navigate(['/list']);
      }, error => {
        console.error('Error adding student:', error);
        // Handle error (e.g., show error message)
      });
    }
  }
}
