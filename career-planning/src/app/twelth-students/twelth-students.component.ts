import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      username: ['', Validators.required],
      science: ['', Validators.required],
      physics: ['', Validators.required],
      chemistry: ['', Validators.required],
      biology: ['', Validators.required],
      maths: ['', Validators.required],
      arts: ['', Validators.required],
      humanity: ['', Validators.required],
      business: ['', Validators.required],
      accountancy: ['', Validators.required],
      openstreams: ['', Validators.required],
    });
  }
  twelth(Formvalue: any) {
    if (Formvalue.science == 1) {
      if (Formvalue.physics == 1 && Formvalue.chemistry == 1 && Formvalue.biology == 1) {
        this.router.navigate(['/solution']);
        console.log('pcb')
      }
      else if (Formvalue.physics == 1 && Formvalue.chemistry == 1 && Formvalue.maths == 1) {
        this.router.navigate(['/solution2']);
        console.log('pcm')
      }

    }
    else if (Formvalue.science == 0) {
      if (Formvalue.arts == 1 && Formvalue.humanity == 1) {
        this.router.navigate(['/home']);
        console.log('art');
      }
      else if (Formvalue.business == 1 && Formvalue.accountancy == 1) {
        this.router.navigate(['/about']);
        console.log('business');
      }
      else if (Formvalue.openstream == 1) {
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
    this.api.twelthdata(Formvalue).subscribe((data) => {
      console.log(data);


    });



  }
}