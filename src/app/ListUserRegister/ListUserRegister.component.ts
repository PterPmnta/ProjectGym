import { Component, OnInit } from '@angular/core';
import { Client } from '../Models/Clients';

@Component({
  selector: 'app-ListUserRegister',
  templateUrl: './ListUserRegister.component.html',
  styleUrls: ['./ListUserRegister.component.scss']
})
export class ListUserRegisterComponent implements OnInit {

  client: Client[] = []

  constructor() { }

  ngOnInit() {
  }

}
