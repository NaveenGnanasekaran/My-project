import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { PartnershipsComponent } from './partnerships/partnerships.component';
import { AboutComponent } from './about/about.component';
import { SolutionComponent } from './solution/solution.component';
import { BookeryComponent } from './bookery/bookery.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TenthStudentsComponent } from './tenth-students/tenth-students.component';
import { TwelthStudentsComponent } from './twelth-students/twelth-students.component';
import { CollegeStudentsComponent } from './college-students/college-students.component';
import { SolutionPart2Component } from './solution-part2/solution-part2.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    ContactComponent,
    PartnershipsComponent,
    AboutComponent,
    SolutionComponent,
    BookeryComponent,
    HomeComponent,
    FooterComponent,
    AdminComponent,
    DashboardComponent,
    TenthStudentsComponent,
    TwelthStudentsComponent,
    CollegeStudentsComponent,
    SolutionPart2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
