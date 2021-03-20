import { Injectable } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreateProductRequest, GetProductsResponse, Product} from "./product.types";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly productsEndpoint = () => `${environment.apiUrl}products`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<GetProductsResponse> {
    return this.http.get<GetProductsResponse>(this.productsEndpoint());
  }

  create(request: CreateProductRequest): Observable<Product> {
    return this.http.post<Product>(this.productsEndpoint(), request);
  }
}
