import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  PAT:string = "";

  constructor() {  }

  setPAT(text: string) {
    this.PAT = text;
  }

  getPAT(): string {
    return this.PAT;
  }

  invalidatePAT(): void {
    this.PAT = "";
  }

  isPATKnown(): boolean {
    if (this.PAT=="") return false; else return true;
  }
}
