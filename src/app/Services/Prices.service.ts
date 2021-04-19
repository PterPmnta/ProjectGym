import { PricesModel } from './../Models/Prices.Model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  pricesList: PricesModel[] = []
  prices: any
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
          if(wd === this.prices.tiempo){
            this.prices.tiempo = (this.weekDays[wd])
          }
        })
        this.pricesList.push(this.prices)
      })
    })
    return this.pricesList
  }

}
