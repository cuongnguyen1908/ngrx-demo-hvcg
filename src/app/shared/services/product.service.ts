import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products/product.model';


const url = 'https://5ec33e128ebdcc0016a5a617.mockapi.io//products';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProduct() {
    return this.http.get<Product[]>(url);
  }
}
