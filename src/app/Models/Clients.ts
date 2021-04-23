import { DocumentReference } from "@angular/fire/firestore"
export class Client{

  Nombre: string = ""
  Apellido: string = ""
  Telefono: number = 0
  Cedula: string = ""
  email: string = ""
  Fecha_N!: Date
  Imagen: string = ""
  id: string = ""
  ref!: DocumentReference

  constructor(){}

}
