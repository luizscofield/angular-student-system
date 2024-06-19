import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-details',
  templateUrl: './studentDetails.component.html',
  styleUrls: ['./studentDetails.component.scss'],
})
export class StudentDetailsComponent implements OnInit {
  student: any = {};

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.studentService.getStudentById(id).subscribe(student => {
          this.student = student;
        }, error => {
          console.error('Error fetching student:', error);
        });
      } else {
        console.error('No studentId provided');
      }
    });
  }

  navigateToStudentList(): void {
    this.router.navigate(['/list']);
  }
}
