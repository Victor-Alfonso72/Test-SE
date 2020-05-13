import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subject, Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public httpClient: HttpClient,
  ) { }

  getData(): Observable<any> {
    return this.httpClient.get<any>(environment.host + 'dashboard/productividad/?format=json').pipe();
  }
}
