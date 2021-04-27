import { PricesService } from './../Services/Prices.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../Models/Clients';
import { Inscription } from '../Models/Inscription';
import { PricesModel } from '../Models/Prices.Model';
import { S_DateService } from '../Services/S_Date.service';

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
  dataDateState: boolean = false

  constructor(public dataFromPrice: PricesService, public actionsFromDate: S_DateService) { }

  ngOnInit() {
    this.pricesList = this.dataFromPrice.getPricesListFromDB()
  }

  setDataClient(client: Client){
    this.inscriptionState = true
    this.clientInscription.ClientRef = client.ref
    this.clientSelected = client
    console.log(this.inscriptionState)
    console.log(this.dataDateState)
  }

  dataClientReset(){
    this.inscriptionState = false
    this.dataDateState = false
    this.clientSelected = new Client()
    this.clientInscription = new Inscription()
  }

  saveClient(){
    console.log(this.clientInscription)
  }

  choosePrice(event: any){

    this.dataDateState = true

    let id = event.target.value
    this.selectedPrice = this.pricesList.find(data => data.id === id)
    this.clientInscription.PriceInscription = this.selectedPrice.ref

    this.clientInscription.StartDate = new Date()

    this.pricesList.find((data) => {
      if(data.id === id){
        this.clientInscription.EndDate = this.actionsFromDate.getDays(data.tiempo, data.duracion)
        this.clientInscription.PayInscription = data.costo
      }
    })

  }

}
