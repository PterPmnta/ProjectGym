import { DocumentReference } from '@angular/fire/firestore';
import { Expose, Type } from 'class-transformer';

import { Client } from './Clients';
import { Inscription_Interface } from './Inscription.Interface';

class FirebaseDate {
  @Expose() seconds = 0;
  @Expose() nanoseconds = 0;
}
export class Inscription implements Inscription_Interface{

  @Expose() @Type(() => FirebaseDate)
  StartDate!: Date
  @Expose() @Type(() => FirebaseDate)
  EndDate!: Date
  @Expose()
  PayInscription: number = 0
  @Expose()
  ClientRef!: DocumentReference
  @Expose()
  PriceInscription!: DocumentReference
  client?: Client

  constructor(){
    this.StartDate = this.StartDate
    this.EndDate = this.EndDate
    this.PayInscription = this.PayInscription
    this.ClientRef = this.ClientRef
    this.PriceInscription = this.PriceInscription
  }

}
