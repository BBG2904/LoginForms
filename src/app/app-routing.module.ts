import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { RegisterLoginComponent } from '../register-login/register-login.component';

const routes: Routes = [
 { path: '', component: LoginComponent},
 {path:'SignUp', component: SignUpComponent},
 {path:'home/:name', component: HomeComponent},
 {path:'RegisterLogin', component: RegisterLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
