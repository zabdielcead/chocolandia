import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Email } from '../interfaces/email';
import { EmailParams } from '../interfaces/emailParams';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  urlEmail = 'https://api.emailjs.com/api/v1.0/email/send';
  service_id = 'gmail';
  template_id = 'chocolacteapedido';
  user_id = 'user_gbBRc5yJnewjBuSQB2mEm';
  constructor(private http: Http) {
  }
  sendMail(emailParams: EmailParams) {
    let email: Email = new Email(this.service_id, this.template_id, this.user_id, emailParams);
    let body = JSON.stringify ( email );
    let headers = new Headers({
      'Content-type' : 'application/json'
    });
    // console.log('body', body);
     /*return this.http.post(this.urlEmail, body, {headers}).subscribe(
       res => {
          console.log('email', res.text);
          return res;
       }
     );   */

     return this.http.post(this.urlEmail, body, { headers }).pipe( map( res => res.text));
  }
}
