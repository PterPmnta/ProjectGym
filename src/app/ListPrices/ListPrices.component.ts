import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PricesModel } from '../Models/Prices.Model';
import { PricesService } from '../Services/Prices.service';

@Component({
  selector: 'app-ListPrices',
  templateUrl: './ListPrices.component.html',
  styleUrls: ['./ListPrices.component.css']
})

export class ListPricesComponent implements OnInit {

  priceForm!: FormGroup
  pricesList: any[] = []
  rowPrice: boolean = false
  idPrice: string = ""
  btnEditPrice: boolean = false
  updatePrice: boolean = false
  statePriceForm: boolean = false

  constructor(public dataPrices: PricesService) { }

  ngOnInit() {
    this.pricesList = this.dataPrices.getPricesListFromDB()
  }

  sendDataPrices(dataFormPrice: PricesModel) {
    console.log("envio dato desde lista precios")
    this.dataPrices.priceDataFromList.next(dataFormPrice)
  }


}
