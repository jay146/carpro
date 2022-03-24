
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:any;
  loginUserData:any={};
  errorMsg:any;
  constructor( private _auth:AuthService,private _router:Router) { }
  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe({
                   next:(res:any)=> {
                                     console.log(res);
                                     this._router.navigate(['/special'])
                                    },
                   error:(e:any)=>{
                                    this.errorMsg=e,
                                    console.log(e.status),
                                  console.log(e.error)},
                   complete:()=>  {
                                    console.log("complete")
                                   }
                   }
                   )
                   
                  }



  ngOnInit(): void {
  }

}
