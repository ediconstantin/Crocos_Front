import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_PATH } from '../models/API_PATH';

@Injectable({
  providedIn: 'root'
})
export class AdminProfileService {

  constructor(private http: HttpClient) { }
}