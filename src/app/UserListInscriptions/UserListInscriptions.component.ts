import { Component, OnInit } from '@angular/core';
import { InscriptionsService } from '../Services/Inscriptions.service';

@Component({
  selector: 'app-UserListInscriptions',
  templateUrl: './UserListInscriptions.component.html',
  styleUrls: ['./UserListInscriptions.component.css']
})
export class UserListInscriptionsComponent implements OnInit {

  suscriptionsList: any[] = []

  constructor(public dataFromInscription: InscriptionsService) { }

  ngOnInit() {
    this.suscriptionsList = this.dataFromInscription.getUsersInscriptions()
    console.log(this.suscriptionsList)
  }

}
