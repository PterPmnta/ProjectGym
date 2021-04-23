import { PricesModel } from './../Models/Prices.Model';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PricesService } from '../Services/Prices.service';

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

  constructor(public dataPrices: PricesService) { }

  ngOnInit() {}

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
