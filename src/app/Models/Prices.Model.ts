import { DocumentReference } from "@angular/fire/firestore"
import { IPrices } from "./IPrices"
export class PricesModel implements IPrices{

    id: string = ""
    nombre: string =""
    costo: number = 0
    duracion: number = 0
    tiempo: number = 0
    ref!: DocumentReference

    constructor(){}

}
