import { Component, OnInit } from '@angular/core';

import { UtilitiesService } from 'src/app/core/utilities/utilities.service';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.css']
})
export class UtilitiesComponent implements OnInit {
  sPerc:string = '';
  sDbfs:string = '';

  constructor(public utlt: UtilitiesService) {
  }

  convertPercDbfs():void {
    this.sDbfs = String(Number(20 * Math.log10(Number(this.sPerc))).toFixed(2));
  }

  clearLocalStorage():void {
    this.utlt.clearLocalStorage();
  }

  ngOnInit(): void {
  }

}
