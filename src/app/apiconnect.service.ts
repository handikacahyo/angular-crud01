import { FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class APIconnectService {
  apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  addFood(obj) {
    return this.http.post(this.apiUrl + 'createfood', obj);
  }

  getFood() {
    return this.http.get(this.apiUrl + 'readfood');
  }

  editFood(obj, id) {
    return this.http.patch(this.apiUrl + 'readfood/' + id, obj);
  }

  deleteFood(obj, id) {
    return this.http.delete(this.apiUrl + 'readfood/' + id, obj);
  }
}
