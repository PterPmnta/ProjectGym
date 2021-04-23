import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {  Subject } from 'rxjs';
import { Client } from '../Models/Clients';

@Injectable({
  providedIn: 'root'
})

export class ClientsService {

  clientsList: Client[] = [];
  client: any

  clientIdFromList: any = new Subject();

  constructor(private firestore: AngularFirestore) { }

  getClientsFromDB(){

    this.clientsList.length = 0
    this.firestore.collection('clients').get().subscribe((list) => {

      this.client = list.docs

      list.docs.forEach(element => {

        this.client = element.data()
        this.client.id = element.id
        this.client.ref = element.ref
        this.clientsList.push(this.client)

      })
    })
    return this.clientsList
  }

}
