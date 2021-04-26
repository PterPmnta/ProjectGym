import { DocumentReference } from '@angular/fire/firestore';
import { Inscription_Interface } from './Inscription.Interface';

export class Inscription implements Inscription_Interface{

  StartDate!: Date
  EndDate!: Date
  InscriptionType!: DocumentReference
  PriceInscription!: DocumentReference

  constructor(){}

}
