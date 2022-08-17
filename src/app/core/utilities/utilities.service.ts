import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  constructor() { }

  encode(value:string):Buffer {
    return Buffer.from(value, 'utf8');
  }
}
