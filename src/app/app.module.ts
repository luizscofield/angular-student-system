// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './studentList/studentList.component'; // Import StudentListComponent
import { StudentFormComponent } from './studentForm/studentForm.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailsComponent } from './studentDetails/studentDetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentListComponent, // Add StudentListComponent here
    StudentFormComponent, 
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
