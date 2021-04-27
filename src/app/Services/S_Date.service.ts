import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class S_DateService {

  weekDays: any = {
    Dia: 1,
    Semana: 7,
    Quincena: 15,
    Mes: 30,
    Año: 365
  }

  endDate: any

constructor() { }

  getDays(tiempo: string, duracion: number){

    //console.log(typeof(tiempo), `- ${tiempo}`)
    //console.log(typeof(duracion), `- ${duracion}`)

    let dayPlus, monthPlus, yearPlus, dataBeginDate

    if(tiempo === "Dia"){

      dataBeginDate = new Date()
      yearPlus = dataBeginDate.getFullYear()
      monthPlus = dataBeginDate.getMonth()
      dayPlus = dataBeginDate.getDate() + duracion

      this.endDate = new Date(yearPlus, monthPlus, dayPlus)
      return this.endDate

    }

    if(tiempo === "Semana"){

    }

    if(tiempo === "Quincena"){

    }

    if(tiempo === "Mes"){

    }

    if(tiempo === "Año"){

    }

  }

}
