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

  constructor(public utilities: UtilitiesService) {
    this.encodeRequest = '';
    this.encodeResponse = '';
  }

  encode(): void {
    console.log(this.encodeRequest);

    this.encodeResponse = new Uint32Array(this.utilities.encode(this.encodeRequest)).toString();

    console.log(this.encodeResponse);
  }

  ngOnInit(): void {
  }

}
