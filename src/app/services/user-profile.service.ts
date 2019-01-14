import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { API_PATH } from '../models/API_PATH';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // tslint:disable-next-line:max-line-length
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc1Byb2YiOmZhbHNlLCJpc0FkbWluIjpmYWxzZSwiaWQiOjE0LCJmaXJzdG5hbWUiOiJBTEVYQU5EUlUgU1RFRkFOIiwibGFzdG5hbWUiOiJCSVNBRyIsImlhdCI6MTU0MzI2NjEzOX0.3MJieujCzB-7WCfOwejK7opP_cK3rQx9S-aZNXOcZvY'
    })
  };

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(API_PATH.USER_INFO, this.httpOptions)
      .pipe(map(this.extractData));
  }

  getPhoto(filename: String): Observable<any> {
    return this.http.get(API_PATH.USER_PHOTO + filename)
    .pipe(map(this.extractData));
  }


}
