import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalsService } from './core/globals/globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  applicationName: string;

  constructor(private router: Router, private globals: GlobalsService) {
    this.applicationName = 'S I G N E';

    console.log("AppComponent constructor finished")
  }
}
