import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { GlobalsService } from './../../core/globals/globals.service';

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
    public globals: GlobalsService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.data.pat = this.globals.getPAT();
  }

  ngOnInit(): void {
  }

}
