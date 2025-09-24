import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>📘 Student List</h3>
    <ul>
      <li *ngFor="let s of students">{{ s }}</li>
    </ul>
  `
})
export class StudentList{
  // sample data
  students = ['Alice', 'Bob', 'Charlie', 'David'];

  constructor() {
    // helps you verify lazy load in the browser console
    console.log('StudentListComponent loaded');
  }
}