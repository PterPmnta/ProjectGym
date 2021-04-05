import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth'
import * as firebase from 'firebase';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'ProjectGym';  
  loading: boolean = true  

  constructor(firestore: AngularFirestore, public auth: AngularFireAuth, public spinner: NgxSpinnerService) {

    this.spinner.show();
    
    this.auth.user.subscribe((usuario) => {

      setTimeout(() => {
        this.loading = false
        this.spinner.hide();
      }, 1000);
      
    })
  }  

  login() {
    this.auth.signInWithEmailAndPassword('pedro.pimienta.morales@gmail.com', '123456789')
  }
  logout() {
    this.auth.signOut();
  }

}
