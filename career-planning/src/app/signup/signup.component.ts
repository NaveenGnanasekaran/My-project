// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, FormBuilder, NgForm } from '@angular/forms';
// import { ApiServiceService, } from '../api-service.service';
// import { emailMatchValidator, rangeValidator } from '../my-validator';
// import { Router } from '@angular/router';

// @Component({
//     selector: 'app-signup',
//     templateUrl: './signup.component.html',
//     styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {
//     myForm: FormGroup;
//     submitted = false;
//     alldata: any;
//     object: any = [];
//     router: any;


//     constructor(private api: ApiServiceService, private build: FormBuilder) {
//         this.myForm = this.build.group({
//             fname: [''],
//             lname: [''],
//             username: [''],
//             email: [''],
//             password: ['']
//         });

//     }
// ngOnInit(): void {
//     this.myForm = new FormGroup({
//         fname: new FormControl(''),
//         lname: new FormControl(''),
//         username: new FormControl(''),
//         email: new FormControl(''),
//         password: new FormControl(''),
//     });
// }
// onSubmit(form: FormGroup) {
//     this.submitted = true;
//     console.log('Valid?', form.valid); // true or false
//     console.log('Email', form.value.email);
//     console.log('Password', form.value.password);
// }
// onReset() {
//     this.submitted = false;
//     this.myForm.reset();
// }
// adduser(Formvalue: NgForm) {
//     console.log(Formvalue);

//     this.api.add(Formvalue).subscribe(data => {
// if (data.docs.length > 0) {
//     this.router.navigate(['home'], {});
// }
// console.log(data);


// alert("data added");
//         })

//         alert("data posted!")
//     }


// }
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
        // console.log(this.registerform);
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