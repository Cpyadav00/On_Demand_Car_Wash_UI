import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CarsComponent } from './components/cars/cars.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { OrderViewTableComponent } from './components/order-form/order-view-table/order-view-table.component';
import { SelectPackageComponent } from './components/select-package/select-package.component';
import { OrderInvoiceComponent } from './components/order-invoice/order-invoice.component';
import { WashRequestComponent } from './components/wash-request/wash-request.component';
import {  GooglePayButtonModule } from '@google-pay/button-angular';
import { ScheduledWashComponent } from './components/scheduled-wash/scheduled-wash.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ScheduledWashForCustomerComponent } from './components/scheduled-wash-for-customer/scheduled-wash-for-customer.component';
import { TestingComponent } from './components/testing/testing.component';
import { AfterWashOrderDetailsComponent } from './components/after-wash-order-details/after-wash-order-details.component';
import { RatingPageComponent } from './components/rating-page/rating-page.component';
import { WasherDetailsComponent } from './components/washer-details/washer-details.component';
import { RestPasswordComponent } from './components/rest-password/rest-password.component';
import { RestPasswordFormComponent } from './components/rest-password-form/rest-password-form.component';
import { AdminSideBarComponent } from './components/admin-side-bar/admin-side-bar.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { AddressListComponent } from './components/address-list/address-list.component';
import { SubscriberComponent } from './components/subscriber/subscriber.component';
import { CustomerSideBarComponent } from './components/customer-side-bar/customer-side-bar.component';
import { WasherSideBarComponent } from './components/washer-side-bar/washer-side-bar.component';
import { ContactUsDisplayAdminComponent } from './components/contact-us-display-admin/contact-us-display-admin.component';
import { HomeComponent } from './components/home/home.component';



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
    NotFoundComponent,
    CarsComponent,
    InvoiceComponent,
    OrderViewTableComponent,
    SelectPackageComponent,
    OrderInvoiceComponent,
    WashRequestComponent,
    ScheduledWashComponent,
    OrderDetailsComponent,
    ScheduledWashForCustomerComponent,
    TestingComponent,
    AfterWashOrderDetailsComponent,
    RatingPageComponent,
    WasherDetailsComponent,
    RestPasswordComponent,
    RestPasswordFormComponent,
    AdminSideBarComponent,
    AdminListComponent,
    CustomerListComponent,
    AddressListComponent,
    SubscriberComponent,
    CustomerSideBarComponent,
    WasherSideBarComponent,
    ContactUsDisplayAdminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    FormsModule,
    GooglePayButtonModule
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
