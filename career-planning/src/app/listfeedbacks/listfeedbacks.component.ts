import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-listfeedbacks',
  templateUrl: './listfeedbacks.component.html',
  styleUrls: ['./listfeedbacks.component.css']
})
export class ListfeedbacksComponent {
  alldata: any;
  object: any = [];

  constructor(private api: ApiServiceService) {
  }




  getuser1() {
    this.api.getUser1().subscribe(data => {
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
