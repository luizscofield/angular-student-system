// src/app/student-details/student-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service'; // Adjusted service import

@Component({
  selector: 'app-student-details',
  templateUrl: './studentDetails.component.html',
  styleUrls: ['./studentDetails.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  student: any = {};

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService // Adjusted service injection
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.studentService.getStudentById(id).subscribe(student => {
          this.student = student; // Assign fetched student data
        }, error => {
          console.error('Error fetching student:', error);
          // Handle error (e.g., redirect to list or show error message)
        });
      } else {
        console.error('No studentId provided');
        // Handle case where no 'id' parameter is provided (e.g., redirect to list or show error message)
      }
    });
  }
}
