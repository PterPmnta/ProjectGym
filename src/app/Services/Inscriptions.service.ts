import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Inscription } from '../Models/Inscription';

@Injectable({
  providedIn: 'root'
})

export class InscriptionsService {

  userListInscriptions: Inscription[] = []
  userList: any

  constructor(private db: AngularFirestore) { }

  getUsersInscriptions(){

    this.userListInscriptions.length = 0

    this.db.collection<Inscription>('inscriptions').get().subscribe((result) => {

      result.docs.forEach((dataInscription) => {

        this.userList = dataInscription.data()
        this.userList.id = dataInscription.id
        //this.userList.ref = dataInscription.ref
        this.db.doc(dataInscription.data().ClientRef.path).get().subscribe((cliente) => {
          this.userList.client= cliente.data()
          this.userListInscriptions.push(this.userList)
        })

      })

    })
    return this.userListInscriptions
  }

}
