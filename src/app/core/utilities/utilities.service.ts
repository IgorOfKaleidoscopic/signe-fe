import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  encode( value:string ):string {
    return Buffer.from(value, 'base64').toString();
  }
}
