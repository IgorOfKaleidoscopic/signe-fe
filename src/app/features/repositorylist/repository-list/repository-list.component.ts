import { Component, OnInit } from '@angular/core';

import { RepositoryListModel } from 'src/app/model/repository-list-model';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent implements OnInit {
  repol: RepositoryListModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
