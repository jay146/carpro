import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { EventsComponent } from './events/events.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExpComponent } from './exp/exp.component';
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
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'events',component:EventsComponent},
    {path:'special',component:SpecialEventsComponent},
    
    {path:' ',redirectTo:'events',pathMatch:'full'},
   

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
