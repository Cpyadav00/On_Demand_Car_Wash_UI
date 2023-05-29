import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AllPackageComponent } from './components/all-package/all-package.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { WasherDashboardComponent } from './components/washer-dashboard/washer-dashboard.component';
import { CustomerFormComponent } from './components/admin-dashboard/customer-form/customer-form.component';
import { FormForPackageComponent } from './components/all-package/form-for-package/form-for-package.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { UpdatePackageComponent } from './components/all-package/update-package/update-package.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { TotalOrdersComponent } from './components/total-orders/total-orders.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CarsComponent } from './components/cars/cars.component';
import { InvoiceComponent } from './components/invoice/invoice.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllPackageComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    NavbarComponent,
    CustomerDashboardComponent,
    WasherDashboardComponent,
    CustomerFormComponent,
    FormForPackageComponent,
    OrderFormComponent,
    UpdatePackageComponent,
    ContactUsComponent,
    AllUsersComponent,
    TotalOrdersComponent,
    NotFoundComponent,
    CarsComponent,
    InvoiceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    FormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){}


 }
