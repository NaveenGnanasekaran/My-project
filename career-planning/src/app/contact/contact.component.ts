
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactform: FormGroup;
  submitted = false;
  constructor(private api: ApiServiceService, private build: FormBuilder) {
    this.contactform = this.build.group({
      name: [''],
      email: [''],
      phone: ['']
    });

  }
  ngOnInit(): void {
    this.contactform = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      txt: new FormControl(''),
      phone: new FormControl('')
    });
  }
  onSubmit(form: FormGroup) {
    this.submitted = true;
    console.log('Valid?', form.valid); // true or false
    console.log('Email', form.value.email);
  }
  onReset() {
    this.submitted = false;
    this.contactform.reset();
  }
  adduser(Formvalue: NgForm) {
    console.log(Formvalue);
    this.api.add(Formvalue).subscribe(data => {
      console.log(data);
    })
    alert("data added");
  }
}
