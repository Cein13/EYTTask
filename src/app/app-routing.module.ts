import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';


const routes: Routes = [{ path: 'login', component: LoginComponent},
                        { path: 'signup', component: SignupComponent},
                        { path: 'home', component: HomeComponent },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard]
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
