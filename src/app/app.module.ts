import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { InpatientComponent } from './inpatient/inpatient.component';
import { OutpatientComponent } from './outpatient/outpatient.component';
import { ContactComponent } from './contact/contact.component';
import { NursingComponent } from './nursing/nursing.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DepartmentsComponent } from './departments/departments.component';
import { BillingComponent } from './billing/billing.component';
import { OvertimeComponent } from './overtime/overtime.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'outpatient',component:OutpatientComponent},
  {path:'inpatient',component:InpatientComponent},
  {path:'contact',component:ContactComponent},
  {path:'nursing',component:NursingComponent},
  {path:'doctors',component:DoctorsComponent},
  {path:'departments',component:DepartmentsComponent},
  {path:'billing',component:BillingComponent},
  {path:'overtime',component:OvertimeComponent},
  {path:'about',component:AboutComponent},
  {path:'appointment',component:AppointmentComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    InpatientComponent,
    OutpatientComponent,
    ContactComponent,
    NursingComponent,
    DoctorsComponent,
    DepartmentsComponent,
    BillingComponent,
    OvertimeComponent,
    AboutComponent,
    LoginComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
