import { ClientsService } from './../Services/Clients.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-ClientsList',
  templateUrl: './ClientsList.component.html',
  styleUrls: ['./ClientsList.component.scss']
})

export class ClientsListComponent implements OnInit {

  imageProfile: string = "../../assets/img/profilemale1.png"
  clientsList: any[] = []
  client: any  
  Id: string = ""
  clickOnEditButton: boolean = false

  @Output() searchByClientId = new EventEmitter()
  
  constructor(private firestore: AngularFirestore, 
              public clientsDataServices: ClientsService) { }

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

  sendClientId(id: string){     
    this.Id = id
    this.clientsDataServices.clientIdFromList.next(this.Id)
  }

}
