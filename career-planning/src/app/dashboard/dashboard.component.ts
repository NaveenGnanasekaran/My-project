import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, FormControl } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  adminlogin: FormGroup;
  submitted = false;
  alldata: any;
  object: any = [];

  constructor(private api: ApiServiceService, private fb: FormBuilder) {
    this.adminlogin = this.fb.group(
      {
        email: [''],
        password: [''],

      }
    )
  }
  ngOnInit(): void {
    this.adminlogin = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }
  onReset() {
    this.submitted = false;
    this.adminlogin.reset();
  }
  onSubmit(form: FormGroup) {
    this.submitted = true;
    console.log('Valid?', form.valid);
    console.log('Email', form.value.email);
  }
  adduser(Formvalue: NgForm) {
    console.log(Formvalue);
    this.api.add(Formvalue).subscribe(data => {
      console.log(data);
    })
    alert('data poted succesfully');
  }

  getuser() {
    this.api.getUser().subscribe(data => {
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
  deleteuser(data: any, data1: any) {
    this.api.remove(data._id, data1._rev).subscribe(_res => {
      console.log('Your data was Deleted from the database');
    })

  }

}
