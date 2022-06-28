import { Component, OnInit } from '@angular/core';
import { DialogComponent } from 'src/app/assistant/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog(title: string, content: string) {
    const dialogRef = this.dialog.open(DialogComponent,{
      data: {title, content}
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
