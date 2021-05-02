import { DocumentReference } from '@angular/fire/firestore';
import { Expose } from 'class-transformer';
import { IClients } from './IClients';

export class Client implements IClients{

  @Expose()
  Nombre: string = ""
  @Expose()
  Apellido: string = ""
  @Expose()
  Telefono: number = 0
  @Expose()
  Cedula: string = ""
  @Expose()
  email: string = ""
  @Expose()
  Fecha_N!: Date
  @Expose()
  Imagen: string = ""
  @Expose()
  id: string = ""
  @Expose()
  ref!: DocumentReference

  constructor(){}

}
