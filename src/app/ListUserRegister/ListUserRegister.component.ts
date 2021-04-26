import { Component, EventEmitter, OnInit } from '@angular/core';
import { Client } from '../Models/Clients';
import { ClientsService } from '../Services/Clients.service';

@Component({
  selector: 'app-ListUserRegister',
  templateUrl: './ListUserRegister.component.html',
  styleUrls: ['./ListUserRegister.component.scss']
})

export class ListUserRegisterComponent implements OnInit {

  clientList: Client[] = new Array<Client>();
  backUpClientList: Client[] = new Array<Client>();
  fullName: string = ""

  @Output() ('sendDataClient') sendDataClient = new EventEmitter()

  constructor(public dataClient: ClientsService) { }

  ngOnInit() {
    this.clientList = this.dataClient.getClientsFromDB()
  }

  searchUser(event: any){

    let userToFind: string = event.target.value

    if(this.backUpClientList.length === 0){
      this.backUpClientList = this.clientList
    }

    if(userToFind === ""){
      this.clientList = this.backUpClientList
    }

    if(event.inputType === 'deleteContentBackward' || event.inputType === 'deleteContentForward'){
      this.clientList = this.backUpClientList
      this.filterUsers(userToFind)
    }

    this.filterUsers(userToFind)
  }

  filterUsers(userToFind: string){
    this.clientList = this.clientList.filter(client =>{
      return client.Nombre.toLowerCase().includes(userToFind.toLowerCase())
    })
  }

  selectClient(client: Client){
    this.fullName = (`${client.Nombre} ${client.Apellido}`)

    this.sendDataClient.emit(client)
  }

}
