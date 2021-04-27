import { PricesService } from './../Services/Prices.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../Models/Clients';
import { Inscription } from '../Models/Inscription';
import { PricesModel } from '../Models/Prices.Model';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.scss']
})
export class RegisterComponent implements OnInit {

  clientInscription: Inscription = new Inscription();
  clientSelected: Client = new Client();
  selectedPrice: PricesModel = new PricesModel()

  pricesList: any[] = [];

  inscriptionState: boolean = false

  constructor(public dataFromPrice: PricesService) { }

  ngOnInit() {
    this.pricesList = this.dataFromPrice.getPricesListFromDB()
    console.log(this.pricesList)
  }

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

  choosePrice(event: any){
    let id = event.target.value
    this.selectedPrice = this.pricesList.find(data => data.id === id)
    this.clientInscription.PriceInscription = this.selectedPrice.ref
    console.log(this.clientInscription)
  }

}
