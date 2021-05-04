import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  iframe: string;
  private messageSource = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }
  getmessage():Observable<any>{
      return this.messageSource.asObservable();
  }
  setmessage(message: string) {
    this.messageSource.next(message)
  }
  sendEmail(url, data) {
    return this.http.post(url, data);
  }
  sendmessage(data){
    return this.http.post( 'http://localhost:5005/webhooks/rest/webhook', data);
  }
  setiframe(data){
    this.iframe = data;
  }
  // tslint:disable-next-line:typedef
  getiframe(){
    return this.iframe;
  }
  
}
