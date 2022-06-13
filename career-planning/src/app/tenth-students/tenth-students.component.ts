import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tenth-students',
  templateUrl: './tenth-students.component.html',
  styleUrls: ['./tenth-students.component.css']
})
export class TenthStudentsComponent implements OnInit {
  tenthform!: FormGroup;
  value: boolean = true;
  object: any = [];
  alldata: any;
  flag = 0;

  constructor(
    private formbuilder: FormBuilder,
    private api: ApiServiceService, private router: Router
  ) { }

  ngOnInit(): void {
    this.tenthform = this.formbuilder.group({
      username: ['', Validators.required],
      higher: ['', Validators.required],
      science: ['', Validators.required],
      arts: ['', Validators.required],
      commerce: ['', Validators.required],
      iti: ['', Validators.required],
      tech: ['', Validators.required],
      diploma: ['', Validators.required],
      polytechnic: ['', Validators.required],
      vocation: ['', Validators.required],
    });
  }
  tenth(Formvalue: any) {
    if (Formvalue.higher == 1) {
      if (Formvalue.science == 1) {
        this.router.navigate(['/about'])
      }
      else if (Formvalue.arts == 1) {
        this.router.navigate(['/login']);
      }
      else if (Formvalue.commerce == 1) {
        this.router.navigate(['/signup']);
      }
    }
    else if (Formvalue.higher == 0) {
      if (Formvalue.diploma == 0) {
        if (Formvalue.iti == 1) {
          this.router.navigate(['/webdev']);
        }
        else if (Formvalue.tech == 1) {
          this.router.navigate(['/dtsci']);
        }

      }
      else if (Formvalue.diploma == 1) {
        if (Formvalue.polytechnic == 1) {
          this.router.navigate(['/solution2']);
        }
        else if (Formvalue.vocation == 1) {
          this.router.navigate(['/appdev']);
        }

      }
    }
    else {
      alert('please select respected values!')
    }
    console.log(Formvalue);
    alert('Your Data Posted....');
    this.tenthform.reset();
    console.log('data get reloaded');
    this.api.tenthdata(Formvalue).subscribe((data) => {
      console.log(data);


    });



  }
}