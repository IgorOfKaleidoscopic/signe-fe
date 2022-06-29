import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  PAT:string;

  constructor() {
    this.PAT = "n/a";
  }

  setPAT(text: string){
    this.PAT = text;
  }

  getPAT(): string{
    return this.PAT;
  }
}
