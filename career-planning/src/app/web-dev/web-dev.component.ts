import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-dev',
  templateUrl: './web-dev.component.html',
  styleUrls: ['./web-dev.component.css']
})
export class WebDevComponent implements OnInit {

  constructor() {
    console.log('webdev');
  }

  ngOnInit(): void {
    console.log('webdev');
  }

}
