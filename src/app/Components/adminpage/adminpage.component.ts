import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Roster } from 'app/Models/roster';
import { AddNewUserDialogComponent } from '../add-new-user-dialog/add-new-user-dialog.component';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  newUser: Roster;

  addNewUser(){
    const dialogRef = this.dialog.open(AddNewUserDialogComponent, {
      data: {newUserInfo: this.newUser}
    });

    dialogRef.afterClosed().subscribe(result=> {
      // Validation for new user here
    })
  }
}