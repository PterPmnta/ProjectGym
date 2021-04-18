import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }


  correctMessage(){
    Swal.fire(
      'Operacion exitosa!',
      'Registro realizado!',
      'success'
    )
  }

  updateMessage(){
    Swal.fire(
      'Operacion exitosa!',
      'Actualizacion realizada!',
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
