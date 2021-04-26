
import { Component, OnInit } from '@angular/core';
import { Client } from '../Models/Clients';
import { Inscription } from '../Models/Inscription';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.scss']
})
export class RegisterComponent implements OnInit {

  clientInscription: Inscription = new Inscription();
  clientSelected: Client = new Client();

  constructor() { }

  ngOnInit() {}

  setDataClient(client: Client){
    this.clientInscription.ClientRef = client.ref
    this.clientSelected = client
  }

}
