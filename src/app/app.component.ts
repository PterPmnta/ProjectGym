import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth'
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'ProjectGym';  

  constructor(firestore: AngularFirestore, public auth: AngularFireAuth) {
    this.auth.user.subscribe((usuario) => {
      console.log(usuario)
    })
  }  

  login() {
    this.auth.signInWithEmailAndPassword('pedro.pimienta.morales@gmail.com', '123456789')
  }
  logout() {
    this.auth.signOut();
  }

}
