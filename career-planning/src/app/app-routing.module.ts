import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SolutionComponent } from './solution/solution.component';
import { BookeryComponent } from './bookery/bookery.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PartnershipsComponent } from './partnerships/partnerships.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SolutionPart2Component } from './solution-part2/solution-part2.component';
import { TenthStudentsComponent } from './tenth-students/tenth-students.component';
import { TwelthStudentsComponent } from './twelth-students/twelth-students.component';
import { CollegeStudentsComponent } from './college-students/college-students.component';
import { WebDevComponent } from './web-dev/web-dev.component';
import { MobDevComponent } from './mob-dev/mob-dev.component';
import { DtSciComponent } from './dt-sci/dt-sci.component';
import { AppDevComponent } from './app-dev/app-dev.component';
import { CounsellingComponent } from './counselling/counselling.component';
import { BookingComponent } from './booking/booking.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'solution', component: SolutionComponent },
  { path: 'bookery', component: BookeryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'partnerships', component: PartnershipsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'solution2', component: SolutionPart2Component },
  { path: 'tenth', component: TenthStudentsComponent },
  { path: 'twelth', component: TwelthStudentsComponent },
  { path: 'college', component: CollegeStudentsComponent },
  { path: 'webdev', component: WebDevComponent },
  { path: 'appdev', component: AppDevComponent },
  { path: 'mobdev', component: MobDevComponent },
  { path: 'dtsci', component: DtSciComponent },
  { path: 'counselling', component: CounsellingComponent },
  { path: 'booking', component: BookingComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
