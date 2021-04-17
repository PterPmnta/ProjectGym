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

  constructor(private fb: FormBuilder, private db: AngularFirestore, private msg: MessageService) { }

  ngOnInit() {

    this.priceForm = this.fb.group({
      nombre: ['', Validators.required],
      costo: ['', Validators.required],
      duracion: ['', Validators.required],
      tiempo: ['', Validators.required]
    })

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

}
