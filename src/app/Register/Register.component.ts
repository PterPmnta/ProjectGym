
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

  inscriptionState: boolean = false

  constructor() { }

  ngOnInit() {}

  setDataClient(client: Client){
    this.inscriptionState = true
    this.clientInscription.ClientRef = client.ref
    this.clientSelected = client
  }

  dataClientReset(){
    this.inscriptionState = false
    this.clientSelected = new Client()
    this.clientInscription = new Inscription()
  }

  saveClient(){
    console.log(this.clientInscription)
  }

}
