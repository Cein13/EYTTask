import { NgModule } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, RouterModule],
  exports: []
})
export class LoginModule { }
