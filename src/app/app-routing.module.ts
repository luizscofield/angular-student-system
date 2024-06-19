// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './studentList/studentList.component';
import { StudentFormComponent } from './studentForm/studentForm.component';
import { StudentDetailsComponent } from './studentDetails/studentDetails.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: StudentListComponent },
  { path: 'add', component: StudentFormComponent },
  { path: 'edit/:id', component: StudentFormComponent },
  { path: 'details/:id', component: StudentDetailsComponent },
  { path: '**', redirectTo: '' } // Handle invalid routes by redirecting to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
