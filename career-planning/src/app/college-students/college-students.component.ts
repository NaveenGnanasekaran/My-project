import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-college-students',
  templateUrl: './college-students.component.html',
  styleUrls: ['./college-students.component.css']
})
export class CollegeStudentsComponent implements OnInit {
  careerform!: FormGroup;
  value: boolean = true;
  object: any = [];
  alldata: any;
  flag = 0;

  constructor(
    private formbuilder: FormBuilder,
    private api: ApiServiceService, private router: Router
  ) { }

  ngOnInit(): void {
    this.careerform = this.formbuilder.group({
      uname: ['', Validators.required],
      javascript: ['', Validators.required],
      html: ['', Validators.required],
      css: ['', Validators.required],
      c: ['', Validators.required],
      matlab: ['', Validators.required],
      pyhon: ['', Validators.required],
      android: ['', Validators.required],
      swift: ['', Validators.required],
      objc: ['', Validators.required],
      java: ['', Validators.required],
    });
    // console.log(this.registerform);
  }
  career(Formvalue: NgForm) {
    console.log(Formvalue);
    alert('Your Data Posted....');
    this.careerform.reset();
    console.log('data get reloaded');
    this.router.navigate(['/webdev'])
    // window.location.reload();
    this.api.testdata(Formvalue).subscribe((data) => {
      console.log(data);
      // const java = this.careerform.value('java');
      // console.log(java);

    });

    // this.router.navigate(['/about']);
    // function add() {
    //   if (this.javascript.value)>= 50px
    //     ;
    // }

  }
  getvalue(Formvalue: NgForm) {



  }
  // adminFormsData(Formvalue: NgForm) {

  //   if (Formvalue. > 50) {
  //     this.router.navigate(['/about'])

  //   }
}