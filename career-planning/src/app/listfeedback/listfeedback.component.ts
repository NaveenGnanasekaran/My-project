import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-listfeedback',
  templateUrl: './listfeedback.component.html',
  styleUrls: ['./listfeedback.component.css']
})
export class ListfeedbackComponent {
  alldata: any;
  object: any = [];

  constructor(private api: ApiServiceService) { }

  getuser5() {
    this.api.getUser5().subscribe(data => {
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
