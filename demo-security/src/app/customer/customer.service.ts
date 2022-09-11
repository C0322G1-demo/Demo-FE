import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = 'http://localhost:8080/api/public/customer';

  constructor(private httpClient: HttpClient) {
  }

  getCustomerList(): Observable<any> {
    return this.httpClient.get(`${this.url}`);
  }
}
