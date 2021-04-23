
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PricesModel } from '../Models/Prices.Model';
import { MessageService } from '../Services/Message.service';
import { PricesService } from '../Services/Prices.service';

@Component({
  selector: 'app-AddPrice',
  templateUrl: './AddPrice.component.html',
  styleUrls: ['./AddPrice.component.css']
})

export class AddPriceComponent implements OnInit {

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

  private ngUnsubscribe: Subscription | null = null

  constructor(private fb: FormBuilder,
              private db: AngularFirestore,
              private msg: MessageService,
              public dataPrices: PricesService)
              {
                this.setDataPrices()
              }

  ngOnInit() {
    this.priceForm = this.fb.group({
      nombre: ['', Validators.required],
      costo: ['', Validators.required],
      duracion: ['', Validators.required],
      tiempo: ['', Validators.required]
    })
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

  updateFormPrice(): void{

    this.ngUnsubscribe?.unsubscribe()

    this.db.doc(`prices/${this.idPrice}`).update(this.priceForm.value).then(() => {

      this.msg.updateMessage()
      this.priceForm.reset()
      this.dataPrices.getPricesListFromDB()

      this.btnEditPrice = false
      this.updatePrice = false

    }).catch((error) => {
      this.msg.errorMessage(error)
    })

  }

  setDataPrices(){

    this.dataPrices.priceDataFromList.subscribe((dataFormPrice: any) => {

      let dataTime = ""

      this.btnEditPrice = true
      this.updatePrice = true
      this.rowPrice = true
      this.idPrice = dataFormPrice.id

      Object.keys(this.weekDays).map((wd) => {

        let dd = dataFormPrice.tiempo.toString()

        if(wd === dd){
          dataTime = (this.weekDays[wd])
        }

      })

      this.priceForm.setValue({
        nombre: dataFormPrice.nombre,
        costo: dataFormPrice.costo,
        duracion: dataFormPrice.duracion,
        tiempo: dataTime
      })

    })

  }

  isEmptyPrice(event: any){

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

}
