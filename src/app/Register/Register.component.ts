import { MessageService } from './../Services/Message.service';
import { PricesService } from './../Services/Prices.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../Models/Clients';
import { Inscription } from '../Models/Inscription';
import { PricesModel } from '../Models/Prices.Model';
import { S_DateService } from '../Services/S_Date.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { InscriptionsService } from '../Services/Inscriptions.service';


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
  suscriptionsList: any[] = []

  inscriptionState: boolean = false
  dataDateState: boolean = false

  idValue: string = 'null'

  constructor(public dataFromPrice: PricesService,
              public actionsFromDate: S_DateService,
              public db: AngularFirestore,
              public msg: MessageService,
              public dataFromInscription: InscriptionsService) { }

  ngOnInit() {
    this.pricesList = this.dataFromPrice.getPricesListFromDB()
    this.suscriptionsList = this.dataFromInscription.getUsersInscriptions()
    console.log(this.suscriptionsList)
  }

  setDataClient(client: Client){
    this.inscriptionState = true
    this.clientInscription.ClientRef = client.ref
    this.clientSelected = client
  }

  dataClientReset(){
    this.inscriptionState = false
    this.dataDateState = false
    this.clientSelected = new Client()
    this.clientInscription = new Inscription()
    this.selectedPrice = new PricesModel()
  }

  saveClient(){

    let inscriptionToSave = {
      StartDate: this.clientInscription.StartDate,
      EndDate: this.clientInscription.EndDate,
      PayInscription: this.clientInscription.PayInscription,
      ClientRef: this.clientInscription.ClientRef,
      PriceInscription: this.clientInscription.PriceInscription
    }

    this.db.collection('inscriptions').add(inscriptionToSave).then((result) => {
      console.log(result)
      this.msg.correctMessage()
      this.idValue = 'null'
      this.dataClientReset()
    }).catch((error) => {
      this.msg.errorMessage(error)
    })

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
