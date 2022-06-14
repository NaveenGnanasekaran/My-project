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
  adduser(formobject: any) {
    return this.http.post("http://localhost:8000/contact", formobject)

  }



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
  counsellingdata(formobject: any) {
    return this.http.post('http://localhost:8000/counselling', formobject);
  }



  getUser() {
    return this.http.get('http://localhost:8000/getUser/');
  }
  getUser1() {
    return this.http.get('http://localhost:8000/getUser1/');
  }
  getUser2() {
    return this.http.get('http://localhost:8000/getUser2/');
  }
  getUser3() {
    return this.http.get('http://localhost:8000/getUser3/');
  }
  getUser4() {
    return this.http.get('http://localhost:8000/getUser4/');
  }
  getUser5() {
    return this.http.get('http://localhost:8000/getUser5/');
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
  getAdmin() {
    return this.http.get('http://localhost:8000/getadmin/');
  }
  getadminId(id: any) {
    return this.http.get(`http://localhost:8000/getadminId/${id}`);
  }
}