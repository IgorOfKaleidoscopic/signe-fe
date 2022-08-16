import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  PAT: string;
  GitHubApiBaseURL: string;

  constructor() {
    this.PAT = "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";
    this.GitHubApiBaseURL = 'https://api.github.com';
  }

  setPAT(text: string) {
    this.PAT = text;
  }

  getPAT(): string {
    return this.PAT;
  }

  invalidatePAT(): void {
    this.setPAT("");
  }

  isPATValid(): boolean {
    if (this.getPAT() == "") return false; else return true;
  }

  getGitHubApiBaseURL():string {
    return this.GitHubApiBaseURL;
  }
}
