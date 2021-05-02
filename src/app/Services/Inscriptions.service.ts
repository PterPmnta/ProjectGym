
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Inscription } from '../Models/Inscription';
import { of, from } from "rxjs";
import { mergeMap, map } from "rxjs/operators"


@Injectable({
  providedIn: 'root'
})

export class InscriptionsService {

  userListInscriptions: Inscription[] = []
  userList: any = {}

  constructor(private db: AngularFirestore) {

    /*let dataBase = this.db.collection<Inscription>('inscriptions').get()

    // primero
    dataBase.subscribe((result) => {

      console.log(result.docs)
      let queryResult = result.docs

      queryResult.forEach((dataInscription) => {

        console.log(dataInscription.data())
        this.userList = dataInscription.data()
        this.userList.id = dataInscription.id

        let referenceClient = dataInscription.data().ClientRef.path
        let databaseDocRef = this.db.doc(referenceClient)
        //el segundo
        databaseDocRef.get().subscribe((cliente) => {
          this.userList.client = cliente.data()
          console.log(this.userList.client)
          this.userListInscriptions.push(this.userList)
        })

      })
    })*/

  }

  getUsersInscriptions(){

    this.userListInscriptions.length = 0
    let dataBase = this.db.collection<Inscription>('inscriptions').get()

    dataBase.subscribe((result) => {

      let queryResult = result.docs

      queryResult.forEach((dataInscription) => {

        this.userList = dataInscription.data()
        this.userList.id = dataInscription.id

        let referenceClient = dataInscription.data().ClientRef.path
        let databaseDocRef = this.db.doc(referenceClient)

        this.setCLients(referenceClient)

      /*  databaseDocRef.get().subscribe((cliente) => {
          let userList: any = {}
          userList.client = cliente.data()
          //console.log(this.userList.client)
          //console.log(this.userList)
          this.userListInscriptions.push(userList.client)
        }) */

      })
    })
  }

  setCLients(dataInscription: any){

        let referenceClient = dataInscription
        let databaseDocRef = this.db.doc(referenceClient)

        databaseDocRef.get().subscribe((cliente) => {
          let userList: any = {}
          userList.client = cliente.data()
          this.userList.client = userList.client
          this.userListInscriptions.push(this.userList)
        })


    return this.userListInscriptions

  }



  getData(){
    const inscriptions$ = this.db.collection<Inscription>('inscriptions').get();
    inscriptions$.pipe(mergeMap(results => {
            return of(results.docs.map(inscriptionData => {
              console.log(Object.assign({}, inscriptionData.data(), {}));
                    return {
                      ...inscriptionData.data()
                    }
                })
            )
    }),
    mergeMap((result) => {
      console.log((result as any).ClientRef)
      console.log(result)
      let path /* any { path } = result.inscriptionData.data().clientRef */
      return of(path).pipe(
          map(clientData => {
              return {
                  ...result,
                  //...clientData
              }
          })
      )

    })
    ).subscribe(x => {

    })
  }

}
