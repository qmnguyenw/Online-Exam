// 1st

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'frontend';
// }

// 2nd
// import {Component, OnInit, OnDestroy} from '@angular/core';
// import {Subscription} from 'rxjs';
// import {ExamsApiService} from './exams/exams-api.service';
// import {Exam} from './exams/exam.model';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit, OnDestroy {
//   title = 'app';
//   examsListSubs: Subscription;
//   examsList: Exam[];

//   constructor(private examsApi: ExamsApiService) {
//   }

//   ngOnInit() {
//     this.examsListSubs = this.examsApi
//       .getExams()
//       .subscribe(res => {
//           this.examsList = res;
//         },
//         console.error
//       );
//   }

//   ngOnDestroy() {
//     this.examsListSubs.unsubscribe();
//   }
// }

// 3rd
// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <div style="text-align:center">
//       <h1>Exams</h1>
//     </div>
//     <h2>Here are the exams created so far: </h2>
//     <router-outlet></router-outlet>
//   `,
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent { }

// 4th
import { Component, OnInit } from '@angular/core';
import * as Auth0 from 'auth0-web';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary" class="mat-elevation-z10">
      <button mat-button>Online Exams</button>
      <button mat-button>About</button>

      <!-- This fills the remaining space of the current row -->
      <span class="fill-remaining-space"></span>

      <button mat-button (click)="signIn()" *ngIf="!authenticated">
        Sign In
      </button>
      <button mat-button (click)="signOut()" *ngIf="authenticated">
        Sign Out
      </button>
    </mat-toolbar>

    <div class="view-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  authenticated = false;

  signIn = Auth0.signIn;
  signOut = Auth0.signOut;

  ngOnInit() {
    const self = this;
    Auth0.subscribe(authenticated => (self.authenticated = authenticated));
  }
}
