import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../../studentService/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './studentForm.component.html',
  styleUrls: ['./studentForm.component.scss']
})
export class StudentFormComponent implements OnInit {
  student: any = {};
  isEditMode = false;
  nomeInvalid = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentService: StudentService
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
    if (!this.student.name || this.student.name.trim() === '' ||
        !this.student.email || this.student.email.trim() === '' ||
        !this.student.phone || this.student.phone.trim() === '' ||
        !this.student.course || this.student.course.trim() === '' ||
        !this.student.age || this.student.age.trim() === '') {
      this.nomeInvalid = true;
      return;
    }

    if (this.isEditMode) {
      this.studentService.updateStudent(this.student).subscribe(() => {
        this.router.navigate(['/list']);
      }, error => {
        console.error('Error updating student:', error);
      });
    } else {
      this.studentService.addStudent(this.student).subscribe(() => {
        this.router.navigate(['/list']);
      }, error => {
        console.error('Error adding student:', error);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/list']);
  }
}
