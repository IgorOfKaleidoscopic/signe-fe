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

    // return this.http.get(`${this.apiURL}/users?per_page=5`);
    return this.http.get(
      `${this.apiURL}/repositories`,
      {
        headers: {
          'Content-Type':' application/json',
          'Accept':' application/vnd.github.v3+json',
          'Authorization':' token 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'// + this.globals.getPAT()
        }
      }
      );
 }

}
