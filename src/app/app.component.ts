import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  applicationName: string;

  // GitHubGatewayService injected to make token available right from the beginning
  constructor(private router: Router) {
    this.applicationName = 'S I G N E';

    console.log("AppComponent.constructor: Finished")
  }
}
