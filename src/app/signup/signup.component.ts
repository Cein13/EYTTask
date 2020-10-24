import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import {switchMap, first, mapTo, take} from 'rxjs/operators';
import 'firebase/auth';
import * as firebase from 'firebase';

class CreateUserGQL {
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  private createUserGql: CreateUserGQL;
  constructor(private fb: FormBuilder, private auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl ('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }
  createUser() {
    const { email, password, fullName } = this.registerForm.value;
    from(this.auth.createUserWithEmailAndPassword(email, password))
      .pipe(
        switchMap(({ user }) => this.metadataCreateWatcher(user)),
        take(1),
        switchMap((user) => from(user.getIdToken(true)).pipe(mapTo(user))),
        switchMap(({ uid: uuid }) =>
          this.createUserGql.mutate({ uuid, fullName })
        )
      )
      .subscribe(() => this.router.navigate(['']), console.error);
  }

  private metadataCreateWatcher(user: firebase.User) {
    return this.fb
      .object(`metadata/${user.uid}/refreshTime`)
      .valueChanges()
      .pipe(
        first((refreshTime) => !!refreshTime),
        mapTo(user)
      );
  }
}
