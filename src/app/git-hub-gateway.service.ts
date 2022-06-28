import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GitHubGatewayService {
  apiURL:string = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getUser(username: string) {
    return this.http.get(`${this.apiURL}/users/${username}`);
  }

}
