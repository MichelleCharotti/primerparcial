import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http : HttpClient) { }

  git = "https://api.github.com/users/michellecharotti";

  obtenerInfoGit(){
   return this.http.get(this.git);
  }
}
