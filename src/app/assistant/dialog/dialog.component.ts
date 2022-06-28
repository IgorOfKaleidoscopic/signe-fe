import { Component, OnInit, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(DIALOG_DATA) public data: {title: string, content: string}) { }

  ngOnInit(): void {
  }

}
