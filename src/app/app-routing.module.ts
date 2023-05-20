import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllPackageComponent } from './components/all-package/all-package.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'dashboard', component:AdminDashboardComponent,canActivate:[AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
