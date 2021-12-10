import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'product',component:ProductListComponent},
    {path:'product/:id',component:ProductDetailComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:' ',redirectTo:'welcome',pathMatch:'full'},
    

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
