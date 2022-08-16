import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError, map, catchError } from 'rxjs';
import { RepositoryListModel } from "src/app/shared/models/repository-list-model"

import { GlobalsService } from '../globals/globals.service';

@Injectable({
  providedIn: 'root'
})
export class GitHubGatewayService {
  apiURL: string = 'https://api.github.com';

  constructor(private http: HttpClient, public globals: GlobalsService) {  }

  getServiceName(): string {
    return 'GitHubGatewayService';
  }

  getRepositoryList(userName: string, pageNo: string, sortOn: string):Observable<> {
    console.log('token ' + this.globals.getPAT());

    return this.http.get<RepositoryListModel>(
      `${this.apiURL}/users/' + userName + '/repos'`,
      {
        headers: {
          'Accept':'application/vnd.github.v3+json',
          'Authorization':`token ${this.globals.getPAT()}`
        },
        params: {
          'sort':sortOn,
          'page':pageNo
        }
      }
      );
 }

}
