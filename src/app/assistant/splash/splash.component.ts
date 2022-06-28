import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  announcement:string = 'my first Angular application signe-fe';

  constructor() { }

  ngOnInit(): void {
  }

}
