import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { UserService } from './user.service';
import { ShowPollComponent } from './show-poll/show-poll.component';
import { HomeComponent } from './home/home.component';
import { GSigninComponent } from './g-signin/g-signin.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'voteon/:pollId', component: ShowPollComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ShowPollComponent,
    HomeComponent,
    GSigninComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    BackendService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
