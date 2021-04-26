import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  cancelState: boolean = false
  findState: boolean = true

  @Output('sendDataClient') sendDataClient = new EventEmitter()
  @Output('cancelClientInscription') cancelClientInscription = new EventEmitter()

  constructor(public dataClient: ClientsService) { }

  ngOnInit() {
    this.clientList = this.dataClient.getClientsFromDB()
    this.backUpClientList = this.clientList
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
    this.clientList = this.backUpClientList
    this.cancelState = true
    this.findState = false
    this.fullName = (`${client.Nombre} ${client.Apellido}`)
    this.sendDataClient.emit(client)
  }

  clearClient(){
    this.cancelState = false
    this.findState = true
    this.fullName = ""
  }

}
