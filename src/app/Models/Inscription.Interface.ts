import { DocumentReference } from '@angular/fire/firestore';

interface FirebaseDate {
  seconds: number;
  nanoseconds: number;
}
export interface Inscription_Interface {
  StartDate: Date
  EndDate: Date
  PayInscription: number
  ClientRef: DocumentReference
  PriceInscription: DocumentReference
}
