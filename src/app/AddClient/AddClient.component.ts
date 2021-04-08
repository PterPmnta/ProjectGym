import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-AddClient',
  templateUrl: './AddClient.component.html',
  styleUrls: ['./AddClient.component.css']
})


export class AddClientComponent implements OnInit {

  clientForm!: FormGroup

  boxState: boolean = true
  controlName!: string
    
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

    this.boxState === null

  }

  saveClient(){
    //console.log(this.clientForm.value)
  }

  isEmpty(event: any){

    this.controlName = event.target.getAttribute('formControlName')
    
    if(event.target.value === ""){
      this.boxState = false
    }else{
      this.boxState = true
    }  
   
  } 

}
