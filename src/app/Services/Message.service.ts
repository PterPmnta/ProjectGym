import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }


  correctMessage(){
    Swal.fire(
      'Usuario registrado!',
      'Registro exitoso!',
      'success'
    )
  }

  updateMessage(){
    Swal.fire(
      'Usuario actualizado!',
      'Actualizacion exitosa!',
      'success'
    )
  }

  errorMessage(error: any){
    Swal.fire({
      icon: 'error',
      title: 'Oops... al parecer ocurrio un error',
      text: `${error}!`
    })
  }


}
