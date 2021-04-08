import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Field {
  value: string;
  touched: boolean;
  error: boolean;
}

interface State {
  name: Field;
  email: Field;
}
@Component({
  selector: 'app-AddClient',
  templateUrl: './AddClient.component.html',
  styleUrls: ['./AddClient.component.css']
})


export class AddClientComponent implements OnInit {

  clientForm!: FormGroup

  boxState: any = {}

  boxState2: any = {
    Cedula: true,
    Nombre: true,
    Apellido: true,
    Telefono: true,
    Fecha_N: true,
    email: true
  }

  boxState3: any = {
      Cedula: {
          value: "",
          touched: false,
          error: false,
      },
      Nombre: {
          value: "",
          touched: false,
          error: false,
      }
   }
  
  constructor(public fb: FormBuilder) { }

  ngOnInit() {

    this.clientForm = this.fb.group({
      Nombre: ['', Validators.required],
      Apellido: ['', Validators.required],
      Telefono: ['', Validators. required],
      Cedula: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      Fecha_N: ['', Validators.required],
      Imagen: ['', Validators.required]
    })  

  }

  saveClient(){
    //console.log(this.clientForm.value)
  }

  isEmpty(event: any){

    let controlName = event.target.getAttribute('formControlName')
    let box = Object.entries(this.boxState2)

    box.forEach(box => {    

    if(event.target.value === ""){
        let position = box.indexOf(controlName)
        if(position === 0){
          box[0+1] = false
        }   
      }else{
        let position = box.indexOf(controlName)
        if(position === 0){
          box[0+1] = true
        } 
      } 

    })

    
    this.boxState = box    
  }

}
