import { NgModule } from '@angular/core';
import {Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { canActivate } from '@angular/fire/auth-guard';
import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = redirectLoggedInTo(['']);
const redirectToHomeWithLogger = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot ) => pipe(
    tap (() => console.info('will be redirected')),
  redirectToHome);

const routes: Routes = [{ path: 'login', component: LoginComponent,
  ...canActivate(redirectToHomeWithLogger)},
                        { path: 'signup', component: SignupComponent},
                        { path: 'home', component: HomeComponent },
  {
    path: '',
    component: HomeComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
