import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl="http://localhost:3000/apidata/register";
  private _loginUrl="http://localhost:3000/apidata/login";
  constructor(private http:HttpClient) { }
registerUser(user:any){
   return this.http.post<any>(this._registerUrl,user);
}


loginUser(user:any){
  return  this.http.post<any>(this._loginUrl,user);
}

loggedIn(){
  return !!localStorage.getItem('token');
}












}
