import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Head',
  templateUrl: './Head.component.html',
  styleUrls: ['./Head.component.scss']
})
export class HeadComponent implements OnInit {

  active = 'top';
  imgLogin: string = "../../assets/img/path24.png"

  constructor() { }

  ngOnInit() {
  }

}
