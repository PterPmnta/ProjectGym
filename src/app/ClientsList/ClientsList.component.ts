import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-ClientsList',
  templateUrl: './ClientsList.component.html',
  styleUrls: ['./ClientsList.component.scss']
})
export class ClientsListComponent implements OnInit {

  imageProfile: string = "../../assets/img/profilemale1.png"
  clientsList: any[] = []

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.firestore.collection('clients').valueChanges().subscribe((list) => {
      console.log(list)
      this.clientsList = list
    })
  }

  searchClients(event: any){
   /* let productFind: string = event.target.value
    this.dataProducts = this.productService.localProducts.filter(product => {
      return product.Name.toLowerCase().includes(productFind)
    }) */
  }

}
