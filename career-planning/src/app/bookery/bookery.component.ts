import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookery',
  templateUrl: './bookery.component.html',
  styleUrls: ['./bookery.component.css']
})
export class BookeryComponent implements OnInit {

  constructor() {
    console.log('bookery');
  }

  ngOnInit(): void {
    console.log('bookery');

  }

}
