import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproducts } from './iproducts';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'] 
})
export class ProductDetailComponent implements OnInit {
  product:Iproducts | undefined;
  pageTitle:string='Product Detail'

  constructor( private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
const id=Number(this.route.snapshot.paramMap.get('id'));
this.pageTitle+=`:${id}`;  
}
home(){
  this.router.navigate(['/welcome']);
}
onback(){
  this.router.navigate(['/product']);
}

}
