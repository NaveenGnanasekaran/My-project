import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  hide: boolean = false;
  show: boolean = true;
  constructor(private http: HttpClient) { }
  add(formobject: any) {
    console.log("abdc");
    return this.http.post("http://localhost:8000/signup", formobject)

  }
  showoff() {
    this.hide = !this.hide;
    this.show = !this.show;
    console.log(this.show)
  }
  // add1(formobject: any) {
  // console.log("abdc");
  // return this.http.post("http://localhost:8000/contact", formobject)

  // }
  // getUser() {
  //   return this.http.get('http://localhost:8000/getUser/');
  // }
  // getUserId(id: any) {
  //   return this.http.get(`http://localhost:8000/getUserId/${id}`);
  // }

  // remove(id: any, id1: any) {
  //   return this.http.delete(`http://localhost:8000/delete/${id}/${id1}`);
  // }

  // getadmin() {
  //   return this.http.get('http://localhost:8000/getadmin/');
  // }
  // logindata(id: any) {
  //   return this.http.get(`http://localhost:8000/get_all_query/${id}`);
  // }


  signupdata(formobject: any) {
    return this.http.post('http://localhost:8000/postquery', formobject);
  }
  testdata(formobject: any) {
    return this.http.post('http://localhost:8000/testquery', formobject);
  }
  tenthdata(formobject: any) {
    return this.http.post('http://localhost:8000/tenthquery', formobject);
  }
  twelthdata(formobject: any) {
    return this.http.post('http://localhost:8000/twelthquery', formobject);
  }


  getUser() {
    return this.http.get('http://localhost:8000/getUser/');
  }
  getUserId(id: any) {
    return this.http.get(`http://localhost:8000/getUserId/${id}`);
  }




  getblockid(id: any) {
    return this.http.get('http://localhost:8000/get_block/' + id);
  }

  remove(id: any, id1: any) {
    return this.http.delete(`http://localhost:8000/delete/${id}/${id1}`);
  }

  //admin
  getadmin() {
    return this.http.get('http://localhost:8000/getadmin/');
  }
  getadminId(id: any) {
    return this.http.get(`http://localhost:8000/getadminId/${id}`);
  }
}