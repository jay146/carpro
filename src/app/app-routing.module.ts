import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExpComponent } from './exp/exp.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductListComponent } from './products/product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [];

@NgModule({
  
  imports: [RouterModule.forRoot([
    {path:'product',component:ProductListComponent},
    {path:'product/:id',canActivate:[ProductDetailGuard],
    component:ProductDetailComponent}, 
    {path:'welcome',component:WelcomeComponent},
    {path:'about',component:AboutComponent},
    {path:'expense',component:ExpComponent},
    {path:' ',redirectTo:'welcome',pathMatch:'full'},
   

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
