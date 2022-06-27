import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  announcement:string = 'my first Angular application signe-fe';

  constructor() { }

  ngOnInit(): void {
  }

}
