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

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'admin', component:AdminDashboardComponent,canActivate:[AuthGuard]},
  {path:'customer', component:CustomerDashboardComponent,canActivate:[AuthGuard]},
  {path:'washer', component:WasherDashboardComponent,canActivate:[AuthGuard]},
  {path:'admin/services', component:AllPackageComponent,canActivate:[AuthGuard]},
  {path:'admin/editForm', component:CustomerFormComponent,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
