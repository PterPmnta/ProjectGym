import { MessageService } from './../Services/Message.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Price',
  templateUrl: './Price.component.html',
  styleUrls: ['./Price.component.scss']
})
export class PriceComponent implements OnInit {

  priceForm!: FormGroup
  pricesList: any[] = []
  prices: any
  weekDays: any = {
    1: "Dia",
    2: "Semana",
    3: "Quincena",
    4: "Mes",
    5: "Año"
  }
  dataTime: any 
  position: any


  constructor(private fb: FormBuilder, private db: AngularFirestore, private msg: MessageService) { }

  ngOnInit() {

    this.priceForm = this.fb.group({
      nombre: ['', Validators.required],
      costo: ['', Validators.required],
      duracion: ['', Validators.required],
      tiempo: ['', Validators.required]
    })

    this.getPricesListFromDB()

  }

  savePrices(){
    //console.log(this.priceForm.value)
    this.db.collection('prices').add(this.priceForm.value).then(() => {
      this.msg.correctMessage()
      this.priceForm.reset()
    }).catch(error => {
      this.msg.errorMessage(error)
    })
  }

  getPricesListFromDB(){
    this.pricesList.length = 0
    this.db.collection('prices').get().subscribe((result) => {

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
        
        console.log(this.prices)

        this.pricesList.push(this.prices)

      })
    })
  }

}
