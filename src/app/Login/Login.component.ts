import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {

  imgLogin: string = "../../assets/img/path24.png"
  loginForm!: FormGroup
  dataInForm: boolean = true
  errorText: string = ""
  invalidUserOrPass: string = "The password is invalid or the user does not have a password."

  constructor(public fb: FormBuilder, firestore: AngularFirestore, public auth: AngularFireAuth) { }  

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      password: ['', Validators.required]
    })
  }

  logIn(){

    if(this.loginForm.valid){
      this.dataInForm = true
      this.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
             .then((userDataLogin) => {
              console.log(userDataLogin)
      }).catch((e) => {
        console.log(e)
        this.dataInForm = false
        if(e.message === this.invalidUserOrPass){
          this.errorText = "El correo o contraseña son incorrectos"
        }        
      })
    }else{
      this.dataInForm = false
    }

    
  }

}
