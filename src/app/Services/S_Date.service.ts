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

      dataBeginDate = new Date()
      yearPlus = dataBeginDate.getFullYear()
      monthPlus = dataBeginDate.getMonth()
      dayPlus = dataBeginDate.getDate() + (duracion * 7)

      this.endDate = new Date(yearPlus, monthPlus, dayPlus)
      return this.endDate

    }

    if(tiempo === "Quincena"){

      dataBeginDate = new Date()
      yearPlus = dataBeginDate.getFullYear()
      monthPlus = dataBeginDate.getMonth()
      dayPlus = dataBeginDate.getDate() + (duracion * 15)

      this.endDate = new Date(yearPlus, monthPlus, dayPlus)
      return this.endDate

    }

    if(tiempo === "Mes"){

      dataBeginDate = new Date()
      yearPlus = dataBeginDate.getFullYear()
      monthPlus = dataBeginDate.getMonth() + duracion
      dayPlus = dataBeginDate.getDate()

      this.endDate = new Date(yearPlus, monthPlus, dayPlus)
      return this.endDate

    }

    if(tiempo === "Año"){

      dataBeginDate = new Date()
      yearPlus = dataBeginDate.getFullYear() + duracion
      monthPlus = dataBeginDate.getMonth()
      dayPlus = dataBeginDate.getDate()

      this.endDate = new Date(yearPlus, monthPlus, dayPlus)
      return this.endDate

    }

  }

}
