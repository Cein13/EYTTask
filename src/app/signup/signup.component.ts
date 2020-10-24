import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl ('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }
  createAccount(): void{
    console.log(this.registerForm.value);
  }
}
