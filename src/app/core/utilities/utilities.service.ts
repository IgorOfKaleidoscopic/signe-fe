import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() {}

  //encodeUint8(value:string):Uint8Array {
  //  return new Uint8Array.from('');
  //}

  decode(value:Buffer):string {
    return value.toString('utf8');
  }

}
