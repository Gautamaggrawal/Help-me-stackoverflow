import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class BackendApiService {
	environment:any;

  constructor(public http: HttpClient) { 
  }
  	getallquestions(page:number): Subject<string> {
    const dataSubject = new Subject<any>();
    console.log("dataSuject",dataSubject);
    this.http.get(
      `${environment.serviceBaseURL}questions/?page=${page}`)
      .subscribe((data) => {
        dataSubject.next(data);
      },(err) => {
        console.log(err);
      });
    return dataSubject;
  }

  getQueryquestion(page:number,query:string): Subject<string> {
    const dataSubject = new Subject<any>();
    this.http.get(
      `${environment.serviceBaseURL}queryques/?page=${page}&query=${query}`)
      .subscribe((data) => {
        dataSubject.next(data);
      },(err) => {
        console.log(err);
      });
    return dataSubject;
  }
}





