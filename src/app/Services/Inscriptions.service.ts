import { Injectable } from '@angular/core';
import { of, from, Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
import { AngularFirestore } from '@angular/fire/firestore';

import { Inscription } from '../Models/Inscription';
import { Client } from '../Models/Clients';

@Injectable({
  providedIn: 'root'
})

export class InscriptionsService {

  userListInscriptions: Inscription[] = []
  userList: any

  constructor(private db: AngularFirestore) { }

  getUsersInscriptions(): Observable<Inscription> {

    return this.db.collection<Inscription>('inscriptions').valueChanges().pipe(
      // obtengo el array de inscripciones y emito una a una
      mergeMap(docs => {
        return from(docs).pipe(
          mergeMap(doc => of(doc))
        )
      }),
      // por cada inscripción, obtengo la data del usuario dueño de la inscripción
      mergeMap(doc => {
        const { path } = doc.ClientRef;
        const inscription = plainToClass(Inscription, doc, { excludeExtraneousValues: true });
        inscription.StartDate = new Date((doc.StartDate as any).seconds * 1000)
        inscription.EndDate = new Date((doc.EndDate as any).seconds * 1000)

        return this.db.doc<Record<string, any>>(path).get().pipe(
          // una vez obtenido, juntamos la info de la inscripción junto con la personal
          map((data) => {
            const client = plainToClass(Client, data.data(), { excludeExtraneousValues: true });
            inscription.client = client;
            return inscription;
          })
        )
      })
    );
  }

}
