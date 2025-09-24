import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <header style="padding:12px; border-bottom:1px solid #eee">
      <nav>
        <a routerLink="/">Home</a> |
        <a routerLink="/students">Students</a> |
        <a routerLink="/teachers">Teachers</a>
      </nav>
    </header>

    <main style="padding:16px">
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {}