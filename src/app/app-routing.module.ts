import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllPackageComponent } from './components/all-package/all-package.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
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
import { ScheduledWashComponent } from './components/scheduled-wash/scheduled-wash.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { TestingComponent } from './components/testing/testing.component';
import { AfterWashOrderDetailsComponent } from './components/after-wash-order-details/after-wash-order-details.component';
import { ScheduledWashForCustomerComponent } from './components/scheduled-wash-for-customer/scheduled-wash-for-customer.component';
import { RatingPageComponent } from './components/rating-page/rating-page.component';
import { WasherDetailsComponent } from './components/washer-details/washer-details.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'contact', component:ContactUsComponent},
  {path:'testing', component:TestingComponent},

  {path:'admin', component:AdminDashboardComponent,canActivate:[AuthGuard]},
  {path:'admin/form', component:CustomerFormComponent,canActivate:[AuthGuard]},
  {path:'admin/services', component:AllPackageComponent,canActivate:[AuthGuard]},
  {path:'admin/services/form', component:FormForPackageComponent,canActivate:[AuthGuard]},
  {path:'admin/services/update', component:UpdatePackageComponent,canActivate:[AuthGuard]},
  {path:'admin/allUsers', component:AllUsersComponent,canActivate:[AuthGuard]},
  {path:'admin/cars', component:CarsComponent,canActivate:[AuthGuard]},
  {path:'admin/washersList', component:WasherDetailsComponent,canActivate:[AuthGuard]},
  {path:'admin/orders', component:InvoiceComponent,canActivate:[AuthGuard]},
  {path:'admin/orderDetails', component:AfterWashOrderDetailsComponent,canActivate:[AuthGuard]},
  {path:'admin/orders/orderDetails', component:AfterWashOrderDetailsComponent,canActivate:[AuthGuard]},

  {path:'customer', component:CustomerDashboardComponent,canActivate:[AuthGuard]},
  {path:'customer/rating', component:RatingPageComponent,canActivate:[AuthGuard]},
  {path:'customer/scheduled', component:ScheduledWashForCustomerComponent,canActivate:[AuthGuard]},
  {path:'customer/scheduled/orderDetails', component:AfterWashOrderDetailsComponent,canActivate:[AuthGuard]},
  {path:'customer/orderDetails', component:AfterWashOrderDetailsComponent,canActivate:[AuthGuard]},

  {path:'washer', component:WasherDashboardComponent,canActivate:[AuthGuard]},
  {path:'washer/orderDetails', component:AfterWashOrderDetailsComponent,canActivate:[AuthGuard]},
  {path:'washer/request', component:WashRequestComponent,canActivate:[AuthGuard]},
  {path:'washer/scheduled', component:ScheduledWashComponent,canActivate:[AuthGuard]},
  {path:'washer/request/orderDetails', component:OrderDetailsComponent,canActivate:[AuthGuard]},
  {path:'washer/scheduled/orderDetails', component:OrderDetailsComponent,canActivate:[AuthGuard]},

  {path:'home/selectpackage', component:SelectPackageComponent,canActivate:[AuthGuard]},
  {path:'home/selectpackage/form/orderview', component:OrderViewTableComponent,canActivate:[AuthGuard]},
  {path:'home/selectpackage/form', component:OrderFormComponent,canActivate:[AuthGuard]},
  {path:'home/selectpackage/form/orderview/invoice', component:OrderInvoiceComponent,canActivate:[AuthGuard]},
  {path:'home/selectpackage/form/orderview/invoice', component:OrderInvoiceComponent,canActivate:[AuthGuard]},

   {path:'**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
