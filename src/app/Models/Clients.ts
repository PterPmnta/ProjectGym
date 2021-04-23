import { DocumentReference } from '@angular/fire/firestore';
import { IClients } from './IClients';
export class Client implements IClients{


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
