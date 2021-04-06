import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-Head',
  templateUrl: './Head.component.html',
  styleUrls: ['./Head.component.scss']
})
export class HeadComponent implements OnInit {

  active = 'top';
  imgLogin: string = "../../assets/img/path24.png"
  userLogin!: any

  constructor(private auth: AngularFireAuth) { }

  ngOnInit() {
    this.auth.user.subscribe((usuario) => {
      this.userLogin = usuario?.email?.replace(".morales@gmail.com","")
    })
  }

  logout() {
    this.auth.signOut();
  }

}
