import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-dev',
  templateUrl: './app-dev.component.html',
  styleUrls: ['./app-dev.component.css']
})
export class AppDevComponent implements OnInit {

  constructor() {
    console.log('app-dev');

  }

  ngOnInit(): void {
    console.log('app-dev');

  }

}
