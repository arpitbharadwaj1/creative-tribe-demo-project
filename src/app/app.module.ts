import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from './services/user-service.service';
import { AlertifyService } from './services/alretify.service';

import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SidebarModule } from "ng-sidebar";
import { FooterComponent } from './footer/footer.component';
import { AddEmployeeComponent } from './dashboard/add-employee/add-employee.component';
import { AddDepartmentComponent } from './dashboard/add-department/add-department.component';
import { DepartmentListComponent } from './dashboard/department-list/department-list.component';
import { EmployeeListComponent } from './dashboard/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { WelcomePageComponent } from './dashboard/welcome-page/welcome-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MainPageComponent } from './dashboard/main-page/main-page.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  

  { path: '', redirectTo: 'register' , pathMatch:'prefix' },

  {
    path: '', component: MainPageComponent,
    children: [
      { path: 'welcome', component: WelcomePageComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'add-department', component: AddDepartmentComponent },
      { path: 'add-employee', component: AddEmployeeComponent },
      { path: 'department-list', component: DepartmentListComponent },
    ]
  },
  

  // {path: 'welcome', component: WelcomePageComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    SideBarComponent,
    FooterComponent,
    AddEmployeeComponent,
    AddDepartmentComponent,
    DepartmentListComponent,
    EmployeeListComponent,
    SearchFilterPipe,
    WelcomePageComponent,
  
    MainPageComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forChild(appRoutes),
    FormsModule,
    SidebarModule.forRoot(),
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],

  providers: [
    UserServiceService,
    AlertifyService,
    AuthService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
