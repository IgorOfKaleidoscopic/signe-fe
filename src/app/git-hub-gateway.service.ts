import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { GlobalsService } from './globals.service';

@Injectable({
  providedIn: 'root'
})
export class GitHubGatewayService {
  apiURL: string = 'https://api.github.com';

  constructor(private http: HttpClient, public globals: GlobalsService) {  }

  getAllUsers() {
    // return this.http.get(`${this.apiURL}/users?per_page=5`);
    return this.http.get(
      `${this.apiURL}/search/users`,
      {
        headers: {
          //'content-type':'application/vnd.github.v3+json',
          'Authorization':`Bearer ${this.globals.getPAT()}`
        }
      }
      );
 }

}
