
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-AddClient',
  templateUrl: './AddClient.component.html',
  styleUrls: ['./AddClient.component.css']
})

export class AddClientComponent implements OnInit {

  clientForm!: FormGroup

  boxState2: any = {
    Cedula: true,
    Nombre: true,
    Apellido: true,
    Telefono: true,
    Fecha_N: true,
    email: true
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

    if (event.target.value === "") {
      this.boxState2[controlName] = false;
    } else {
      this.boxState2[controlName] = true;
    }
       
  } 

}
