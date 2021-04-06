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
  client: any
  
  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {

    this.clientsList.length = 0

    this.firestore.collection('clients').get().subscribe((list) => {
      
      this.client = list.docs

      list.docs.forEach(element => {

        this.client = element.data()
        this.client.id = element.id
        this.client.ref = element.ref       

        this.clientsList.push(this.client)
        console.log(this.clientsList)

      });

    })

  }

  searchClients(event: any){
   /* let productFind: string = event.target.value
    this.dataProducts = this.productService.localProducts.filter(product => {
      return product.Name.toLowerCase().includes(productFind)
    }) */
  }

}
