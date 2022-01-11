import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Iproducts } from './iproducts';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'] 
})
export class ProductDetailComponent implements OnInit {
  products: any;
  pageTitle:string='Product  clicked is';

  
sub!: Subscription;
  errormessage: any;
  constructor( private ps:ProductsService,private route:ActivatedRoute,
    private router:Router) { 
      
    }

  ngOnInit(): void {
const id=Number(this.route.snapshot.paramMap.get('id'));
this.pageTitle+=`:${id}`;  

console.log("ngonInit called");
console.log("value of id  in ngOnInit() is "+id);
this.sub=this.ps.getproducts().subscribe({
  // passing in an observable object
  // provides functions to respond to  3notifications(next,error,complete)
  next:product=>{
    this.products=product;
  },
  error:err=>this.errormessage=err,

});


}
home(){
  this.router.navigate(['/welcome']);
}
onback(){
  this.router.navigate(['/product']);
}

}
