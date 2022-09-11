import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = 'http://localhost:8080/api/public';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  };
  private header: any;

  constructor(private httpClient: HttpClient) {
    this.header = new Headers({'Content-Type': 'application/context'});
  }

  getALl(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.url}/list`);
  }
}
