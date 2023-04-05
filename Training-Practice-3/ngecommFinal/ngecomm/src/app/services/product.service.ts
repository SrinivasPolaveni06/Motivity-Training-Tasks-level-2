import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/dev.environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  all() {
    //return this.http.get(environment.api + "/items")      // javascript way of code
    return this.http.get(`${environment.api}/products`) //type script way
  }

  create(payload: any) {
    return this.http.post(`${environment.api}/products`, payload)
  }

  singleProduct(id: any) {
    return this.http.get(`${environment.api}/products/${id}`)
  }

  update(payload: any, id: any) {
    return this.http.put(`${environment.api}/products/${id}`, payload)
  }
}
