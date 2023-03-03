import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

signIn(email:any,password:any){
let data={
  email:email,
  password:password
}
return this.http.post('http://localhost:3000/sign-in',data)
}

getEmployeeDetails(){
  return this.http.get('http://localhost:3000/get-employees');
}

}
