import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>📕 Teacher List</h3>
    <ul>
      <li *ngFor="let t of teachers">{{ t }}</li>
    </ul>
  `
})
export class TeacherList {
  teachers = ['Mr. Smith', 'Ms. Johnson', 'Dr. Adams', 'Prof. Brown'];

  constructor() {
    console.log('TeacherListComponent loaded');
  }
}
