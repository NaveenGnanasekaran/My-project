import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    alldata: any;
    flag = 0;
    object: any = [];
    userform!: FormGroup;
    constructor(
        private formbuilder: FormBuilder,
        private api: ApiServiceService,
        private router: Router,
        private toastr: ToastrService
    ) { }

    ngOnInit(): void {
        this.userform = this.formbuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(5)]],
        });

        this.api.getUser().subscribe((data) => {
            console.log(data);

            console.log('Data was fetching');

            this.alldata = data;
            this.alldata = this.alldata.docs;
            console.log(this.alldata);
            for (const i of this.alldata) {
                // const elt = this.alldata[i];
                // console.log(elt.id);
                // this.api.getUserId(elt.id).subscribe((res) => {
                //   console.log(res);
                this.object.push(i);
                console.log('Fetched successfuly');

                // });
            }
        });
    }

    userFormData(formvalue: any) {
        console.log(formvalue);
        for (const i of this.object) {
            if (
                i.username == formvalue.username &&
                i.password == formvalue.password
            ) {
                this.flag = 1;
            }
        }
        if (this.flag == 1) {

            this.api.showoff();
            alert('Valid User!')
            this.toastr.success('login successfully');

            this.router.navigate(['/solution2']);
        } else {
            this.toastr.error('login is invalid');

            alert('Not a valid user');
            location.reload();
        }
    }
}