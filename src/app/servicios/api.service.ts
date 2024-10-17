import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http : HttpClient) { }

  getPaisesAmericano(){
    return this.http.get('https://restcountries.com/v3.1/region/America');
  }

  getPaisesEuropeos(){
    return this.http.get('https://restcountries.com/v3.1/region/europe');
  }
}
