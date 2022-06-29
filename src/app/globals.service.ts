import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  PAT:string = "unknown";

  constructor() {  }

  setPAT(text: string) {
    this.PAT = text;
  }

  getPAT(): string {
    return this.PAT;
  }

  invalidatePAT(): void {
    this.PAT = "unknown";
  }

  isPATKnown(): boolean {
    if (this.PAT=="unknown") return false; else return true;
  }
}
