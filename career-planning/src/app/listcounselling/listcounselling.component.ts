import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-listcounselling',
  templateUrl: './listcounselling.component.html',
  styleUrls: ['./listcounselling.component.css']
})
export class ListcounsellingComponent {
  alldata: any;
  object: any = [];
  constructor(private api: ApiServiceService) { }


  getuser3() {
    this.api.getUser3().subscribe(data => {
      console.log(data);
      console.log('data fetching');
      this.alldata = data;
      this.alldata = this.alldata.docs;
      console.log(this.alldata);
      for (const i of this.alldata) {
        this.object.push(i);
        console.log("fetched successfully in add component");
      }
    })
  }
}
