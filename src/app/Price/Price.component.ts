import { PricesModel } from './../Models/Prices.Model';
import { MessageService } from './../Services/Message.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PricesService } from '../Services/Prices.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-Price',
  templateUrl: './Price.component.html',
  styleUrls: ['./Price.component.scss']
})


export class PriceComponent implements OnInit {

  priceForm!: FormGroup
  pricesList: any[] = []
  rowPrice: boolean = false
  idPrice: string = ""
  btnEditPrice: boolean = false
  updatePrice: boolean = false
  statePriceForm: boolean = false

  weekDays: any = {
    Dia: 1,
    Semana: 2,
    Quincena: 3,
    Mes: 4,
    Año: 5
  }

  priceFormStateBox: any = {
    nombre: false,
    costo: false,
    duracion: false,
    tiempo: false
  }

  constructor(private fb: FormBuilder, 
              private db: AngularFirestore, 
              private msg: MessageService,
              public dataPrices: PricesService) { }

  ngOnInit() {

    this.priceForm = this.fb.group({
      nombre: ['', Validators.required],
      costo: ['', Validators.required],
      duracion: ['', Validators.required],
      tiempo: ['', Validators.required]
    })

    this.pricesList = this.dataPrices.getPricesListFromDB()

  }

  savePrices(){

    this.db.collection<PricesModel>('prices').add(this.priceForm.value).then(() => {
      this.msg.correctMessage()
      this.dataPrices.getPricesListFromDB()
      this.priceForm.reset()
    }).catch(error => {
      this.msg.errorMessage(error)
    })

  }  

  isEmpty(event: any){

    let controlName = event.target.getAttribute('formControlName')

    if (event.target.value === "") {

        if(this.btnEditPrice === true){
          this.priceFormStateBox[controlName] = false;
          this.updatePrice = false
        }

        if(this.btnEditPrice === false){
          this.priceFormStateBox[controlName] = false;
        }
          

    } else {

      if(this.btnEditPrice === true){
        
        this.priceFormStateBox[controlName] = true;  
        
        this.statePriceForm = Object.values(this.priceForm.value).includes("") 
        if(this.statePriceForm === false){
          this.updatePrice = true
        }  
      }

      if(this.btnEditPrice === false){
        this.priceFormStateBox[controlName] = true;
      }

    }
  } 

  setPricesOnForm(dataFormPrice: PricesModel){

    this.btnEditPrice = true
    this.updatePrice = true
    this.rowPrice = true
    this.idPrice = dataFormPrice.id

    Object.keys(this.weekDays).map((wd) => {   

      let dd = dataFormPrice.tiempo.toString()
      if(wd === dd){
        dataFormPrice.tiempo = (this.weekDays[wd])
      }

    })

    this.priceForm.setValue({
      nombre: dataFormPrice.nombre,
      costo: dataFormPrice.costo,
      duracion: dataFormPrice.duracion,
      tiempo: dataFormPrice.tiempo
    })

  }

}
