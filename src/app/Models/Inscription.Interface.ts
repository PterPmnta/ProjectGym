import { DocumentReference } from '@angular/fire/firestore';

export interface Inscription_Interface {
  StartDate: Date
  EndDate: Date
  PayInscription: number
  ClientRef: DocumentReference
  PriceInscription: DocumentReference
}
