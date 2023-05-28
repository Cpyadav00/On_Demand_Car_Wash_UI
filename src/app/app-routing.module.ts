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
import { TotalOrdersComponent } from './components/total-orders/total-orders.component';
import { CarsComponent } from './components/cars/cars.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'admin', component:AdminDashboardComponent,canActivate:[AuthGuard]},
  {path:'customer', component:CustomerDashboardComponent,canActivate:[AuthGuard]},
  {path:'washer', component:WasherDashboardComponent,canActivate:[AuthGuard]},
  {path:'admin/services', component:AllPackageComponent,canActivate:[AuthGuard]},
  {path:'admin/form', component:CustomerFormComponent,canActivate:[AuthGuard]},
  {path:'admin/services/form', component:FormForPackageComponent,canActivate:[AuthGuard]},
  {path:'home/form', component:OrderFormComponent,canActivate:[AuthGuard]},
  {path:'admin/services/update', component:UpdatePackageComponent,canActivate:[AuthGuard]},
  {path:'admin/allUsers', component:AllUsersComponent,canActivate:[AuthGuard]},
  {path:'home/contact', component:ContactUsComponent},
  {path:'admin/orders', component:TotalOrdersComponent,canActivate:[AuthGuard]},
  {path:'admin/cars', component:CarsComponent,canActivate:[AuthGuard]},


  
  {path:'**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
