import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-list12th',
  templateUrl: './list12th.component.html',
  styleUrls: ['./list12th.component.css']
})
export class List12thComponent {
  alldata: any;
  object: any = [];
  constructor(private api: ApiServiceService) { }
  getuser4() {
    this.api.getUser4().subscribe(data => {
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
