import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-counselling',
  templateUrl: './counselling.component.html',
  styleUrls: ['./counselling.component.css']
})
export class CounsellingComponent implements OnInit {
  counsellingform!: FormGroup
  constructor(private formbuilder: FormBuilder,
    private api: ApiServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.counsellingform = this.formbuilder.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      qualification: ['', Validators.required],
      time: ['', Validators.required]
    })
  }

  career(Formvalue: any) {
    this.counsellingform.reset();
    console.log('data gt reloaded');
    this.api.counsellingdata(Formvalue).subscribe((data) => {
      console.log(data);

    })
    this.router.navigate(['/booking']);

    alert('counselling booked!')

  }

}
