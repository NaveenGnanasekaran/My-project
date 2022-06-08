import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-twelth-students',
  templateUrl: './twelth-students.component.html',
  styleUrls: ['./twelth-students.component.css']
})
export class TwelthStudentsComponent implements OnInit {
  twelthform!: FormGroup;
  value: boolean = true;
  object: any = [];
  alldata: any;
  flag = 0;

  constructor(
    private formbuilder: FormBuilder,
    private api: ApiServiceService, private router: Router
  ) { }

  ngOnInit(): void {
    this.twelthform = this.formbuilder.group({
      uname: ['', Validators.required],
      sci: ['', Validators.required],
      phy: ['', Validators.required],
      che: ['', Validators.required],
      bio: ['', Validators.required],
      mat: ['', Validators.required],
      art: ['', Validators.required],
      hmt: ['', Validators.required],
      bus: ['', Validators.required],
      acc: ['', Validators.required],
      os: ['', Validators.required],
    });
  }
  twelth(Formvalue: any) {
    if (Formvalue.sci == 1) {
      if (Formvalue.phy == 1 && Formvalue.che == 1 && Formvalue.bio == 1) {
        this.router.navigate(['/solution']);
        console.log('pcb')
      }
      else if (Formvalue.phy == 1 && Formvalue.che == 1 && Formvalue.mat == 1) {
        this.router.navigate(['/solution2']);
        console.log('pcm')
      }
      else {
        alert('select correct values')
      }

    }
    else if (Formvalue.sci == 0) {
      if (Formvalue.art == 1 && Formvalue.hmt == 1) {
        this.router.navigate(['/home']);
        console.log('art');
      }
      else if (Formvalue.bus == 1 && Formvalue.acc == 1) {
        this.router.navigate(['/about']);
        console.log('business');
      }
      else if (Formvalue.os == 1) {
        this.router.navigate(['/contact']);
        console.log('opensource');
      }
      else {
        alert('please select respective values..🤐')
      }

    }
    else {
      alert("please select respective values");
    }
    console.log(Formvalue);
    alert('Your Data Posted..💡');
    this.twelthform.reset();
    console.log('data get reloaded');
    // this.router.navigate(['/webdev'])
    this.api.twelthdata(Formvalue).subscribe((data) => {
      console.log(data);


    });



  }
}