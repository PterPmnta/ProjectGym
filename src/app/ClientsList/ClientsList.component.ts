import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ClientsList',
  templateUrl: './ClientsList.component.html',
  styleUrls: ['./ClientsList.component.scss']
})
export class ClientsListComponent implements OnInit {

  imageProfile: string = "../../assets/img/profilemale1.png"

  constructor() { }

  ngOnInit() {
  }

  searchClients(event: any){
   /* let productFind: string = event.target.value
    this.dataProducts = this.productService.localProducts.filter(product => {
      return product.Name.toLowerCase().includes(productFind)
    }) */
  }

}
