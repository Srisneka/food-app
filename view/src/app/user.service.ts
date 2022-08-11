import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodItem } from './fooditem';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl="http://localhost:8080/fooditems";
  constructor(private http: HttpClient) { }

  getItems():Observable<FoodItem[]>{
    return this.http.get<FoodItem[]>(`${this.baseUrl}`);
  }
}
