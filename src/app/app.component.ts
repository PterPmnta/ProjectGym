import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth'
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
      }, 2000);
      
    })
  }  

  login() {
    this.auth.signInWithEmailAndPassword('pedro.pimienta.morales@gmail.com', '123456789')
  }
  logout() {
    this.auth.signOut();
  }

}
