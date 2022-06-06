import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  add(formobject: any) {
    console.log("abdc");
    return this.http.post("http://localhost:8000/signup", formobject)

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
  billingdata(formobject: any) {
    return this.http.post('http://localhost:8000/post_query', formobject);
  }
  feedbackdata(formobject: any) {
    return this.http.post('http://localhost:8000/post__query', formobject);
  }

  getUser() {
    return this.http.get('http://localhost:8000/getUser/');
  }
  getUserId(id: any) {
    return this.http.get(`http://localhost:8000/getUserId/${id}`);
  }

  getbill() {
    return this.http.get('http://localhost:8000/getbill/');
  }

  getFeedback() {
    return this.http.get('http://localhost:8000/getFeedback/');
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