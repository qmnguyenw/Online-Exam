import * as Auth0 from 'auth0-web';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Exam } from './exam.model';
import { ExamsApiService } from './exams-api.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'exams',
  template: `
    <h2>Exams</h2>
    <p>Choose an exam and start studying.</p>

    <div class="exams">
      <mat-card
        class="example-card"
        *ngFor="let exam of examsList"
        class="mat-elevation-z5"
      >
        <mat-card-content>
          <mat-card-title>{{ exam.title }}</mat-card-title>
          <p>
            Etiam enim purus, vehicula nec dapibus quis, egestas eu quam. Nullam
            eleifend auctor leo, vitae rhoncus mi sodales vel. Aenean fermentum
            laoreet volutpat. Integer quam orci, molestie non nibh suscipit,
            faucibus euismod sapien.
          </p>

          <p>
            <button mat-raised-button color="accent">Start Exam</button>
          </p></mat-card-content
        >
      </mat-card>
    </div>
    <button
      mat-fab
      color="primary"
      *ngIf="authenticated"
      class="new-exam"
      routerLink="/new-exam"
    >
      <i class="material-icons">note_add</i>
    </button>
  `,
  styleUrls: ['exams.component.css']
})
export class ExamsComponent implements OnInit, OnDestroy {
  examsListSubs: Subscription;
  examsList: Exam[];
  authenticated = false;

  constructor(private examsApi: ExamsApiService) {}

  // signIn = Auth0.signIn;
  // signOut = Auth0.signOut;
  // getProfile = Auth0.getProfile;

  ngOnInit() {
    this.examsListSubs = this.examsApi.getExams().subscribe(res => {
      this.examsList = res;
    }, console.error);
    const self = this;
    Auth0.subscribe(authenticated => (self.authenticated = authenticated));
  }

  ngOnDestroy() {
    this.examsListSubs.unsubscribe();
  }
}
