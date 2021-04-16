import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Price',
  templateUrl: './Price.component.html',
  styleUrls: ['./Price.component.scss']
})
export class PriceComponent implements OnInit {

  priceForm!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.priceForm = this.fb.group({
      nombre: ['', Validators.required],
      costo: ['', Validators.required],
      duracion: ['', Validators.required],
      tiempo: ['', Validators.required]
    })

  }

}
