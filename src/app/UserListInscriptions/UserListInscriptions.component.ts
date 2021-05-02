import { Component, OnInit } from '@angular/core';
import { Inscription } from '../Models/Inscription';
import { InscriptionsService } from '../Services/Inscriptions.service';

@Component({
  selector: 'app-UserListInscriptions',
  templateUrl: './UserListInscriptions.component.html',
  styleUrls: ['./UserListInscriptions.component.css']
})
export class UserListInscriptionsComponent implements OnInit {

  suscriptionsList: Inscription[] = []

  constructor(public dataFromInscription: InscriptionsService) { }

  ngOnInit() {
    const sub = this.dataFromInscription.getUsersInscriptions().subscribe({
      next: (inscription) => {
        this.suscriptionsList.push(inscription);
      },
      complete() {
        sub.unsubscribe();
      }
    })
  }

}
