import { HttpClient, HttpErrorResponse, JsonpClientBackend } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { catchError, filter, Observable, tap, throwError } from 'rxjs';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   
  private productUrl='api/products/products.json';
  
  getproducts():Observable<Iproducts[]>{
return  this.http.get<Iproducts[]>
(this.productUrl).
pipe(
tap(
  data=>console.log("data recieved from service is displayed using tap operator is "
  +(JSON.stringify(data))
  )),
  
  catchError(this.handleError));
  }
  private handleError(err:HttpErrorResponse){
    let errormessage="";
    if(err.error instanceof ErrorEvent)
    {
      errormessage=`An error occured: ${err.error.message}`;
    }
    else
    {
      errormessage=`Server returned code ${err.status},error message is ${err.message}`
    }
    console.log( errormessage);
    return throwError(errormessage);
    
    }
  constructor(private http:HttpClient) { }
}


