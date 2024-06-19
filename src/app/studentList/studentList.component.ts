import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './studentList.component.html',
  styleUrls: ['./studentList.component.scss']
})
export class StudentListComponent implements OnInit {
  students: any[] = [];
  columns: Array<string> = ["Id", "Nome", "Email", "Ações"];

  constructor(
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe(
      students => {
        this.students = students;
      },
      error => {
        console.error('Error fetching students:', error);
      }
    );
  }

  editStudent(id: string): void {
    this.router.navigate(['/edit', id]);
  }

  deleteStudent(id: string): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe(
        () => {
          this.loadStudents();
        },
        error => {
          console.error('Error deleting student:', error);
        }
      );
    }
  }

  viewStudentDetails(id: string): void {
    this.router.navigate(['/details', id]);
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
