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
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1>Exams</h1>
    </div>
    <h2>Here are the exams created so far: </h2>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
