import { Component, OnInit } from '@angular/core';

import { UtilitiesService } from 'src/app/core/utilities/utilities.service';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.css']
})
export class UtilitiesComponent implements OnInit {
  encodeRequest:string;
  encodeResponse:string;

  constructor(public utlt: UtilitiesService) {
    this.encodeRequest = '';
    this.encodeResponse = '';
  }

  encode(): void {
    //this.encodeResponse = new Uint8Array(this.utlt.encode(this.encodeRequest)).toString();
    //console.log(this.encodeRequest);
    //console.log(new Uint32Array(this.utlt.encode(this.encodeRequest)).toString());
    //console.log(this.encodeResponse);
  }

  ngOnInit(): void {
  }

}
