import { DocumentReference } from '@angular/fire/firestore';
import { Inscription_Interface } from './Inscription.Interface';
export class Inscription implements Inscription_Interface{

  StartDate!: Date
  EndDate!: Date
  ClientRef!: DocumentReference
  PriceInscription!: DocumentReference

  constructor(){
    this.StartDate = this.StartDate
    this.EndDate = this.EndDate
    this.ClientRef = this.ClientRef
    this.PriceInscription = this.PriceInscription
  }

}
