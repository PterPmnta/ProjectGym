import { ClientsService } from './../Services/Clients.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
///import { tns } from "node_modules/tiny-slider/src/tiny-slider.js"

@Component({
  selector: 'app-ClientsList',
  templateUrl: './ClientsList.component.html',
  styleUrls: ['./ClientsList.component.scss']
})

export class ClientsListComponent implements OnInit {

  imageProfile: string = "../../assets/img/profilemale1.png"
  clientsList: any[] = []
  client: any  
  test: any[] = []
  
  constructor(private firestore: AngularFirestore, public clientsDataServices: ClientsService) { }

  ngOnInit() {    

    this.clientsList.length = 0
    this.clientsList = this.clientsDataServices.getClientsFromDB()

  }

  searchClients(event: any){
   /* let productFind: string = event.target.value
    this.dataProducts = this.productService.localProducts.filter(product => {
      return product.Name.toLowerCase().includes(productFind)
    }) */
  }

}
