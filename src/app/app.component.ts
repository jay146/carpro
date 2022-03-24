import { RegisterComponent } from './register/register.component';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { style } from '@angular/animations';

@Component({
  selector: 'app-root',
 templateUrl:'./app.component.html',

})
export class AppComponent implements AfterViewInit {
  pageTitle= 'Product Management';
hascolor=true;
toggle(){
  this.hascolor=!this.hascolor;
}
  @ViewChild(RegisterComponent)
  childCompRef: RegisterComponent |  any;
  ngAfterViewInit(): void {
    this.childCompRef.message="Message from parent component";
    console.log(this.childCompRef.message)
  }
}
  