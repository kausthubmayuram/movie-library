import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrlProd = 'https://movies-api-avm5.onrender.com/api';
  baseUrlLoca = 'http://localhost:3300/api';
  constructor(private http:HttpClient) { }

  getAllMovies(){
    return this.http.get(this.baseUrlLoca + '/movies/getAll');
  }
}
