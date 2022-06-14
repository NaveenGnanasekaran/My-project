import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-list10th',
  templateUrl: './list10th.component.html',
  styleUrls: ['./list10th.component.css']
})
export class List10thComponent implements OnInit {
  alldata: any;
  object: any = [];

  constructor(private api: ApiServiceService) {
  }

  ngOnInit(): void {
  }

  getuser2() {
    this.api.getUser2().subscribe(data => {
      console.log(data);
      console.log('Data was fetching');
      this.alldata = data;
      this.alldata = this.alldata.docs;
      console.log(this.alldata);
      for (const i of this.alldata) {

        this.object.push(i);
        console.log('Fetched successfuly in add component');


      }

    });
  }
}
