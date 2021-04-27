import { DocumentReference } from '@angular/fire/firestore';

export interface IPrices{

    id: string
    nombre: string
    costo: number
    duracion: number
    tiempo: number
    ref: DocumentReference

}
