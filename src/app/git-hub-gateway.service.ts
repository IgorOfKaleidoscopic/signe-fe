import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { GlobalsService } from './globals.service';

@Injectable({
  providedIn: 'root'
})
export class GitHubGatewayService {
  apiURL: string = 'https://api.github.com';

  constructor(private http: HttpClient, public globals: GlobalsService) {  }

  getRepositories() {
    console.log('token ' + this.globals.getPAT());

    return this.http.get(
      `${this.apiURL}/repositories`,
      {
        headers: {
          'Accept':'application/vnd.github.v3+json',
          'Authorization':`token ${this.globals.getPAT()}`
        }
      }
      );
 }

}
