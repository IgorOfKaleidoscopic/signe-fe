import { Component, OnInit, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(@Inject(DIALOG_DATA) public data: {title: string, content: string}) { }

  ngOnInit(): void {
  }

}
