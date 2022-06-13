import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-college-students',
  templateUrl: './college-students.component.html',
  styleUrls: ['./college-students.component.css']
})
export class CollegeStudentsComponent implements OnInit, OnDestroy {
  careerform!: FormGroup;
  total1: any;
  total2: any;
  total3: any;

  constructor(
    private formbuilder: FormBuilder,
    private api: ApiServiceService, private router: Router
  ) { }

  ngOnInit(): void {
    this.careerform = this.formbuilder.group({
      username: ['', Validators.required],
      javascript: ['', Validators.required],
      html: ['', Validators.required],
      css: ['', Validators.required],
      c: ['', Validators.required],
      matlab: ['', Validators.required],
      python: ['', Validators.required],
      swift: ['', Validators.required],
      objectivec: ['', Validators.required],
      java: ['', Validators.required],
    });
    localStorage.setItem("user", "1");
    let val = localStorage.getItem("user");
    console.log(val);
  }
  ngOnDestroy(): void {
    localStorage.removeItem("user");

  }
  career(Formvalue: any) {
    console.log(Formvalue);
    this.total1 = parseInt(Formvalue.javascript) + parseInt(Formvalue.html) + parseInt(Formvalue.css);
    this.total2 = parseInt(Formvalue.c) + parseInt(Formvalue.python) + parseInt(Formvalue.matlab);
    this.total3 = parseInt(Formvalue.swift) + parseInt(Formvalue.objectivec) + parseInt(Formvalue.java);
    console.log(this.total1);
    console.log(this.total2);
    console.log(this.total3);

    if (this.total1 > this.total2 && this.total1 > this.total3) {
      this.router.navigate(['/webdev']);
    }
    else if (this.total2 > this.total3 && this.total2 > this.total1) {
      this.router.navigate(['/dtsci']);
    }
    else if (this.total3 > this.total1 && this.total3 > this.total2) {

      this.router.navigate(['/appdev'])
    }

    else {
      this.router.navigate(['/error'])
    }
    this.careerform.reset();
    console.log('data get reloaded');
    this.api.testdata(Formvalue).subscribe((data) => {
      console.log(data);


    });



  }
}