import { DocumentReference } from '@angular/fire/firestore';
import { Inscription_Interface } from './Inscription.Interface';
export class Inscription implements Inscription_Interface{

  StartDate!: Date
  EndDate!: Date
  PayInscription: number = 0
  ClientRef!: DocumentReference
  PriceInscription!: DocumentReference

  constructor(){
    this.StartDate = this.StartDate
    this.EndDate = this.EndDate
    this.PayInscription = this.PayInscription
    this.ClientRef = this.ClientRef
    this.PriceInscription = this.PriceInscription
  }

}
