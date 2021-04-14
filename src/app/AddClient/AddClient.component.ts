
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from '../Services/Clients.service';

@Component({
  selector: 'app-AddClient',
  templateUrl: './AddClient.component.html',
  styleUrls: ['./AddClient.component.css']
})

export class AddClientComponent implements OnInit {

  clientForm!: FormGroup
  urlImage: string = ""

  boxState2: any = {
    Cedula: true,
    Nombre: true,
    Apellido: true,
    Telefono: true,
    Fecha_N: true,
    email: true
  }

  progressBarState: number = 0  

  update: boolean = false
  stateClientForm: boolean = false
  btnSaveClient: boolean = false
  btnUpdateClient: boolean = false
    
  constructor(public fb: FormBuilder, 
              private storage: AngularFireStorage, 
              private db: AngularFirestore, 
              public clientsDataServices: ClientsService) 
              { 
                this.clientById()
              }

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

  isEmpty(event: any){

    let controlName = event.target.getAttribute('formControlName')

    if (event.target.value === "") {

        if(this.btnUpdateClient === true){
          this.boxState2[controlName] = false;
          this.update = false
          //this.clientForm.valid = false
        }

        if(this.btnUpdateClient === false){
          this.boxState2[controlName] = false;
        }
          

    } else {

      if(this.btnUpdateClient === true){
        this.boxState2[controlName] = true;  
        this.setImageAndDate()
        this.stateClientForm = Object.values(this.clientForm.value).includes("") 
        if(this.stateClientForm === false){
          this.update = true
          //this.clientForm.valid
        }  
      }

      if(this.btnUpdateClient === false){
        this.boxState2[controlName] = true;
      }

    }
  } 

  saveClient(){

    this.clientForm.value.Imagen = this.urlImage
    this.clientForm.value.Fecha_N = new Date(this.clientForm.value.Fecha_N)
    this.db.collection('clients').add(this.clientForm.value).then((results) => {
      this.clientsDataServices.getClientsFromDB()
      this.clientForm.reset()
    })

  }  

  imageUpload(evento: any){

    if(evento.target.files.length > 0){

      let nameImageByDate = new Date().getTime().toString()
      let file = evento.target.files[0]; 
      let formatImage = file.type.replace('image/', '')     
      let filePath = `clientes/${nameImageByDate}.${formatImage}`;
      const ref = this.storage.ref(filePath);
      const task = ref.put(file);

      task.percentageChanges().subscribe((porcent) => {
        this.progressBarState = parseInt(porcent!.toString())
      })    

      task.then(() => {
          ref.getDownloadURL().subscribe((imageUrl) => {
           this.urlImage = imageUrl
        })
      })

    } 

  }

  clientById(){

    this.clientsDataServices.clientIdFromList.subscribe((Id: any) => {
      this.db.doc<any>(`clients/${Id}`).valueChanges().subscribe((client) => {

        let fecha = new Date(client.Fecha_N.seconds * 1000)
        let year = fecha.getFullYear()
        let month = ("0" + (fecha.getMonth() + 1)).slice(-2)
        let day = ("0" + fecha.getDate()).slice(-2)
        let fullDate = `${year}-${month}-${day}` 

        this.clientForm.setValue({
          Nombre: client.Nombre,
          Apellido: client.Apellido,
          Telefono: client.Telefono,
          Cedula: client.Cedula,
          email: client.email,
          Fecha_N: fullDate,
          Imagen: ''
        })   
        this.urlImage = client.Imagen        
        this.btnUpdateClient = true  
        this.update = true
      })
        //this.btnUpdateClient = true
        //this.update = true      
    })
  }

  updateClient(){
    
    this.setImageAndDate()
    this.stateClientForm = Object.values(this.clientForm.value).includes("") 
    if(this.stateClientForm === false){
      console.log("Esta habilitado")
    }
    
  }

  setImageAndDate(){

    this.clientForm.value.Imagen = this.urlImage
    this.clientForm.value.Fecha_N = new Date(this.clientForm.value.Fecha_N) 

  }

}
