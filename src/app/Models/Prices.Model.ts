import { DocumentReference } from "@angular/fire/firestore"
export class PricesModel{

    id: string = ""
    nombre: string =""
    costo: number = 0
    duracion: number = 0
    tiempo: number = 0
    referencia!: DocumentReference

    constructor(){}

}
