import { DocumentReference } from "@angular/fire/firestore"

export interface IClients{

  Nombre: string
  Apellido: string
  Telefono: number
  Cedula: string
  email: string
  Fecha_N: Date
  Imagen: string
  id: string
  ref: DocumentReference

}
