import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { switchMap, first, mapTo, take } from 'rxjs/operators';
import {emailVerified} from '@angular/fire/auth-guard';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl ('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }
  createAccount(): void{
    const {email, password} = this.registerForm.value;
    this.auth.signInWithEmailAndPassword(email, password).then(user => {
      console.log('RegisterComponent -> createUser -> user', user);
    });
  }
}
