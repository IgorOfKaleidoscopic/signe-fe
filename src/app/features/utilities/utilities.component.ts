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

  encode() {
    this.encodeResponse = this.utilities.encode(this.encodeRequest);
  }

  ngOnInit(): void {
  }

}
