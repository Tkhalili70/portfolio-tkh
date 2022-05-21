import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn:'root'
})
export class MailService{
  constructor(public http:HttpClient) {
  }
  sendEmail(body:any):Observable<any>{


    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('X-RapidAPI-Host', 'rapidprod-sendgrid-v1.p.rapidapi.com');
    headers = headers.set('X-RapidAPI-Key', 'fd0e7a0ea2mshef6d93710e95595p13128cjsnb45ca2e90041');

  let data =  `{"personalizations":[{"to":[{"email":"khalili_tannaz@yahoo.com"}],"subject": "${body.subject}"}],"from":{"email":"${body.email}"},"content":[{"type":"text/plain","value":"${body.name} ${body.description}"}]}`
    return this.http.post('https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send', data, {headers:headers ,responseType: 'json'})
      .pipe(
        map(
          (response: any) => {
            return new Promise((resolve, reject) => resolve(response));
          },
          (error: any) => {
            return new Promise((resolve, reject) => reject(error));
          }
        ));
  }
}
