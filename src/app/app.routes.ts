import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'students', loadComponent: () => import('./students/student-list/student-list').then(m => m.StudentList) },
  { path: 'teachers', loadComponent: () => import('./teachers/teacher-list/teacher-list').then(m => m.TeacherList) },
  { path: '**', loadComponent: () => import('./not-found/not-found').then(m => m.NotFound) }
];

//Each loadComponent uses dynamic import() so the component bundle is fetched only when the route is visited.