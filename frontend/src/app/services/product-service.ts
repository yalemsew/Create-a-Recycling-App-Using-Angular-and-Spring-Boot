import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  getProducts () : Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.API_URL}/api/products`);
  }

  getProduct(id: string | null) : Observable<Product> {
    return this.http.get<Product>(`${environment.API_URL}/api/products/${id}`);
  }
}
