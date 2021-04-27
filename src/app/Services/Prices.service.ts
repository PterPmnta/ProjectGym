import { PricesModel } from './../Models/Prices.Model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PricesService {

  priceDataFromList: any = new Subject();

  //pricesList: PricesModel = new PricesModel()
  pricesList: PricesModel[] = []
  prices: any

  btnEditPrice: boolean = false
  updatePrice: boolean = false
  rowPrice: boolean = false
  idPrice: string = ""

  weekDays: any = {
    1: "Dia",
    2: "Semana",
    3: "Quincena",
    4: "Mes",
    5: "Año"
  }

 constructor(private db: AngularFirestore) { }

  getPricesListFromDB(){

    this.pricesList.length = 0

    this.db.collection<PricesModel>('prices').get().subscribe((result) => {

      this.prices = result.docs

      result.docs.forEach((dataPrice) => {

        this.prices = dataPrice.data()
        this.prices.id = dataPrice.id
        this.prices.ref = dataPrice.ref

        Object.keys(this.weekDays).map((wd) => {

          let position = Number.parseInt(wd)
          if(position === Number.parseInt(this.prices.tiempo)){
            this.prices.tiempo = (this.weekDays[position])
          }
        })
        this.pricesList.push(this.prices)
      })
    })
    return this.pricesList
  }

}
