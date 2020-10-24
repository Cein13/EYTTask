import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyDFnCog7Zfx71bJTEQmTrBICxWLfviWTU0',
  authDomain: 'react-test-563e6.firebaseapp.com',
  databaseURL: 'https://react-test-563e6.firebaseio.com',
  projectId: 'react-test-563e6',
  storageBucket: 'react-test-563e6.appspot.com',
  messagingSenderId: '843469197110',
  appId: '1:843469197110:web:5cf84376a6ca3f4f60ad97'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
