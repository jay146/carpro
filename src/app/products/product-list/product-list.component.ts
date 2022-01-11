import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Iproducts } from '../iproducts';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit ,OnDestroy{
pageTitle:string="Product List";
imagewidth:number=100;
imagemargin:number=2;
showimage:boolean=true;
//listFilter:string="benz";
products:Iproducts[]=[];
errormessage='';
sub!: Subscription;

toggleimage(){ 
  this.showimage= !this.showimage;
  console.log("image are rendered"); 
}
filteredproducts:any;
//listFilter:string="benz";
// removing listFilter for creating a backing variable (use in getter and setter)
private _listFilter=' ';
// 1) created a backing variable with empty string

private productservice:any;
// for retriving data from service 

get listFilter():string{
  return this._listFilter;
}
// get method returns the backing variable  from user input
set listFilter(value:string){
this._listFilter=value;
// if value changes in input  it will be sent into the set listfilter() parameter value
console.log("value in setter is",value);
this.filteredproducts=this.performFilter(value);
}
// setter executed when a value is assigned to the property.
performFilter(filteredby:string){
console.log("filtered value in performfilter() method is "+filteredby);
filteredby=filteredby.toLocaleLowerCase();  
console.log("filteredby VALUE IS "+filteredby);
// converting into lowercase
return this.products.
filter((products:Iproducts)=>
products.productname.toLocaleLowerCase().includes(filteredby));
}
constructor(private ps:ProductsService) { 

}
ngOnInit(): void {
    console.log("in oninit method");
  this.sub=this.ps.getproducts().subscribe({
      // passing in an observable object
      // provides functions to respond to  3notifications(next,error,complete)
      next:products=>{
        this.products=products;
        this.filteredproducts=this.products;
      },
      error:err=>this.errormessage=err,
 
    });
 

    }


    ngOnDestroy():void{
      this.sub.unsubscribe();
      console.log("Unsubscribed using ngOnDestriy() method...");
      
    }

}
