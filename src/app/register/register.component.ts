import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registeredUserData:any={};
  errorMsg:any;
  constructor(private _auth:AuthService,private _router:Router) { }
message:any;    
 @ViewChild('emailRef')
  emailElementRef!: ElementRef;
//  ngAfterViewInit(){
//   this.emailElementRef.nativeElement.focus();
//   console.log(this.emailElementRef);

//  } 



  registerUser(){
    console.log(this.registeredUserData);
    this._auth.registerUser(this.registeredUserData)
    .subscribe({
     next: (res) =>{console.log(res)
       localStorage.setItem('token',res.token)
       console.log(res.token);
       this._router.navigate(['/special'])
  },
  error:(e:any)=>{
    this.errorMsg=e,
    console.log(e.status),
  console.log(e.error)},
complete:()=>  {
    console.log("complete")
   }
    
})
   
}
  ngOnInit(): void {

    }
  }

 


