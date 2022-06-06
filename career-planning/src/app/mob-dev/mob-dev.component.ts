import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mob-dev',
  templateUrl: './mob-dev.component.html',
  styleUrls: ['./mob-dev.component.css']
})
export class MobDevComponent implements OnInit {

  constructor() {
    console.log('mob-dev');
  }

  ngOnInit(): void {
    console.log('mob-dev');

  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}
