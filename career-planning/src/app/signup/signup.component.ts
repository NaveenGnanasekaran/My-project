import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
    registerform!: FormGroup;
    value: boolean = true;

    constructor(
        private formbuilder: FormBuilder,
        private api: ApiServiceService,
        private router: Router,
        private toastr: ToastrService

    ) { }

    ngOnInit(): void {
        this.registerform = this.formbuilder.group({
            username: ['', Validators.required],
            // phone: ['', [Validators.required, Validators.pattern("[7-9]{1}[0-9]{2}-[0-9]{3}-[0-9]{4}")]],
            phone: ['', Validators.required],

            email: ['', Validators.required],
            // blockname: ['', Validators.required],
            password: ['', Validators.required],
            // confirmpassword: ['', Validators.required],
        });
    }
    register(Formvalue: NgForm) {
        console.log(Formvalue);
        alert('Your Data Posted....');
        this.toastr.success('signup finished successfully');

        this.registerform.reset();
        console.log('data get reloaded');
        this.router.navigate(['/login']);

        this.api.signupdata(Formvalue).subscribe((data) => {
            console.log(data);

        });
    }
}