import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EmployeeService } from './services/employee.service';

 
 const firebaseConfig = {
    apiKey: "AIzaSyCwtE_6F0Vd_mUf2B_-LQUj9sV1U-XjK6M",
    authDomain: "employes-32b44.firebaseapp.com",
    databaseURL: "https://employes-32b44.firebaseio.com", 
    storageBucket: "employes-32b44.appspot.com",
    messagingSenderId: "696843040133"
  };

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'addEmploer', component: AddEmployeeComponent , canActivate:[AuthGuard]},
  { path: 'register', component: RegisterComponent  },
  { path: 'edit-employee/:id', component: EditEmployeeComponent , canActivate:[AuthGuard]},
  {path:'employee/:id',component:EmployeeInfoComponent, canActivate:[AuthGuard]} 

]; 

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    DashboardComponent,
    EditEmployeeComponent,
    EmployeeInfoComponent,
    EmployeesComponent,
    LoginComponent,
    NavbarComponent,
    PageNotFoundComponent,
    RegisterComponent,
    SettingsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
     RouterModule.forRoot(routes),
    FlashMessagesModule 
   ],
  providers: [
    AngularFireModule,
    AngularFireAuth ,
    EmployeeService,
    AngularFireDatabase,
    AuthGuard,
    AuthService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
