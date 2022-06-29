import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  pat: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    public dialogHandle: MatDialogRef<SignInComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  }

  ngOnInit(): void {
  }

}
