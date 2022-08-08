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
    this.setPAT("");
  }

  isPATValid(): boolean {
    if (this.getPAT()=="") return false; else return true;
  }
}
