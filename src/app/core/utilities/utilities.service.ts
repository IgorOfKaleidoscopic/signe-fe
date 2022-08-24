import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  constructor() {}

  encodeTextToLocalStorage(text:string, prefix:string) {
    let len:number = text.length;

    localStorage.setItem(prefix, len.toString());

    new TextEncoder().encode(text).reverse().forEach((val, idx) => {
      localStorage.setItem(prefix + idx.toString().padStart(3, '0'), val.toString());
    });

    console.log('UtilitiesService.encodeTextToLocalStorage: Text "' + text + '" has just been encoded in localStorage');
  }

  decodeTextFromLocalStorage(prefix:string):string {
    if(localStorage.getItem(prefix)){
      let len:number = Number(localStorage.getItem(prefix));
      let arrText:Uint8Array = new Uint8Array(len);
      let sText:string;

      for(let i:number = 0; i < len; i++){
        arrText[i] = Number(localStorage.getItem(prefix + i.toString().padStart(3, '0')));
      }

      sText = new TextDecoder().decode(arrText.reverse());

      console.log('UtilitiesService.decodeTextFromLocalStorage: Text "' + sText + '" decoded from localStorage');

      return sText;
    } else {
      console.log('UtilitiesService.decodeTextFromLocalStorage: No such text found in localStorage');

      return '';
    }
  }

  removeEncodedTextFromLocalStorage(prefix:string) {
    let len:number = Number(localStorage.getItem(prefix));

    localStorage.removeItem(prefix);

    for(let i:number = 0; i < len; i++){
      localStorage.removeItem(prefix + i.toString().padStart(3, '0'));
    }

    console.log('UtilitiesService.removeEncodedTextFromLocalStorage: Text by prefix "' + prefix + '" has been removed from the localStorage');
  }

  clearLocalStorage():void {
    localStorage.clear();
  }
}
