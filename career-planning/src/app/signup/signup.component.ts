import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

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
        private api: ApiServiceService
    ) { }

    ngOnInit(): void {
        this.registerform = this.formbuilder.group({
            username: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', Validators.required],
            blockname: ['', Validators.required],
            password: ['', Validators.required],
            confirmpassword: ['', Validators.required],
        });
    }
    register(Formvalue: NgForm) {
        console.log(Formvalue);
        alert('Your Data Posted....');
        this.registerform.reset();
        console.log('data get reloaded');
        window.location.reload();
        this.api.signupdata(Formvalue).subscribe((data) => {
            console.log(data);
        });
    }
}