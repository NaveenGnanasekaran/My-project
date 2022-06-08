import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public header: ApiServiceService, private router: Router) {

  }

  ngOnInit(): void {
    console.log('navbar');

  }
  logout() {
    this.header.hide = false;
    this.header.show = true;
    this.router.navigate(['/login']);
  }

}
